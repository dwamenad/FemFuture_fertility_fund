import { NextRequest } from "next/server";
import { UserRole } from "@prisma/client";
import { z } from "zod";
import { db } from "@/lib/db";
import { handleRouteError, ok } from "@/lib/http";
import { requireRole } from "@/lib/authz";

const messageSchema = z.object({
  applicationId: z.string().min(1),
  body: z.string().min(1).max(2000)
});

export async function GET(req: NextRequest) {
  try {
    const { userId, role } = await requireRole([UserRole.APPLICANT, UserRole.ADMIN, UserRole.REVIEWER]);
    const applicationId = req.nextUrl.searchParams.get("applicationId");

    if (!applicationId) {
      throw new Error("applicationId is required");
    }

    const application = await db.application.findUnique({
      where: { id: applicationId },
      include: { applicantProfile: true }
    });

    if (!application) {
      throw new Error("Application not found");
    }

    if (role === UserRole.APPLICANT && application.applicantProfile.userId !== userId) {
      throw new Error("Cannot view this message thread");
    }

    const thread = await db.messageThread.findFirst({
      where: { applicationId },
      include: {
        messages: {
          orderBy: { createdAt: "asc" },
          include: {
            sender: {
              select: { name: true, role: true }
            }
          }
        }
      }
    });

    return ok({ thread });
  } catch (error) {
    return handleRouteError(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId, role } = await requireRole([UserRole.APPLICANT, UserRole.ADMIN, UserRole.REVIEWER]);
    const parsed = messageSchema.parse(await req.json());

    const application = await db.application.findUnique({
      where: { id: parsed.applicationId },
      include: { applicantProfile: true }
    });

    if (!application) {
      throw new Error("Application not found");
    }

    if (role === UserRole.APPLICANT && application.applicantProfile.userId !== userId) {
      throw new Error("Cannot write to this thread");
    }

    const thread =
      (await db.messageThread.findFirst({ where: { applicationId: parsed.applicationId } })) ||
      (await db.messageThread.create({ data: { applicationId: parsed.applicationId } }));

    const message = await db.message.create({
      data: {
        threadId: thread.id,
        senderId: userId,
        senderRole: role ?? UserRole.APPLICANT,
        body: parsed.body
      }
    });

    return ok({ message }, 201);
  } catch (error) {
    return handleRouteError(error);
  }
}
