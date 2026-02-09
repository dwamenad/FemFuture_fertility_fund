import { NextRequest } from "next/server";
import { Prisma, UserRole } from "@prisma/client";
import { db } from "@/lib/db";
import { handleRouteError, ok } from "@/lib/http";
import { requireRole } from "@/lib/authz";
import {
  calculateNeedScore,
  saveStepSchema,
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
  step6Schema
} from "@/lib/validators/application";

export async function POST(req: NextRequest) {
  try {
    const { userId, role } = await requireRole([UserRole.APPLICANT, UserRole.ADMIN]);
    const body = await req.json();
    const parsed = saveStepSchema.parse(body);

    const application = await db.application.findUnique({
      where: { id: parsed.applicationId },
      include: { applicantProfile: true }
    });

    if (!application) {
      throw new Error("Application not found");
    }

    if (role !== UserRole.ADMIN && application.applicantProfile.userId !== userId) {
      throw new Error("You can only edit your own application");
    }

    let validatedData: Prisma.InputJsonValue;
    const updatePayload: Prisma.ApplicationUpdateInput = {};

    if (parsed.step === 1) {
      const stepData = step1Schema.parse(parsed.data);
      validatedData = stepData;
      updatePayload.applicantProfile = {
        update: {
          legalFirstName: stepData.legalFirstName,
          legalLastName: stepData.legalLastName,
          phone: stepData.phone,
          pronouns: stepData.pronouns || null
        }
      };
    } else if (parsed.step === 2) {
      const stepData = step2Schema.parse(parsed.data);
      validatedData = stepData;
      updatePayload.academicStage = stepData.academicStage;
      updatePayload.expectedCompletionAt = new Date(stepData.expectedCompletionAt);
    } else if (parsed.step === 3) {
      const stepData = step3Schema.parse(parsed.data);
      validatedData = stepData;
      updatePayload.requestType = stepData.requestType;
    } else if (parsed.step === 4) {
      const stepData = step4Schema.parse(parsed.data);
      validatedData = stepData;
      updatePayload.needScore = calculateNeedScore(stepData);
    } else if (parsed.step === 5) {
      validatedData = step5Schema.parse(parsed.data);
    } else {
      validatedData = step6Schema.parse(parsed.data);
    }

    await db.applicationStepData.upsert({
      where: {
        applicationId_step: {
          applicationId: parsed.applicationId,
          step: parsed.step
        }
      },
      update: {
        data: validatedData,
        isComplete: parsed.isComplete
      },
      create: {
        applicationId: parsed.applicationId,
        step: parsed.step,
        data: validatedData,
        isComplete: parsed.isComplete
      }
    });

    if (Object.keys(updatePayload).length > 0) {
      await db.application.update({
        where: { id: parsed.applicationId },
        data: updatePayload
      });
    }

    const updated = await db.application.findUnique({
      where: { id: parsed.applicationId },
      include: { steps: { orderBy: { step: "asc" } } }
    });

    return ok({ application: updated });
  } catch (error) {
    return handleRouteError(error);
  }
}
