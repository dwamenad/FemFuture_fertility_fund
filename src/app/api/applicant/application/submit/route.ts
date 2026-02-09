import { NextRequest } from "next/server";
import { ApplicationStatus, UserRole } from "@prisma/client";
import { db } from "@/lib/db";
import { handleRouteError, ok } from "@/lib/http";
import { requireRole } from "@/lib/authz";
import { submitSchema } from "@/lib/validators/application";

export async function POST(req: NextRequest) {
  try {
    const { userId, role } = await requireRole([UserRole.APPLICANT, UserRole.ADMIN]);
    const parsed = submitSchema.parse(await req.json());

    const application = await db.application.findUnique({
      where: { id: parsed.applicationId },
      include: { applicantProfile: true, steps: true }
    });

    if (!application) {
      throw new Error("Application not found");
    }

    if (role !== UserRole.ADMIN && application.applicantProfile.userId !== userId) {
      throw new Error("Cannot submit this application");
    }

    const completeSteps = new Set(application.steps.filter((step) => step.isComplete).map((step) => step.step));
    for (let requiredStep = 1; requiredStep <= 6; requiredStep += 1) {
      if (!completeSteps.has(requiredStep)) {
        throw new Error(`Step ${requiredStep} must be completed before submission`);
      }
    }

    const updated = await db.application.update({
      where: { id: parsed.applicationId },
      data: {
        status: ApplicationStatus.SUBMITTED,
        submittedAt: new Date()
      },
      include: {
        steps: {
          orderBy: { step: "asc" }
        }
      }
    });

    return ok({ application: updated });
  } catch (error) {
    return handleRouteError(error);
  }
}
