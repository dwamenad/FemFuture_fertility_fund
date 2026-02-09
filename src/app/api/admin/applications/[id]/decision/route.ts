import { ApplicationStatus, UserRole } from "@prisma/client";
import { z } from "zod";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/authz";
import { handleRouteError, ok } from "@/lib/http";
import { writeAuditLog } from "@/lib/audit";

const schema = z.object({
  recommendation: z.enum([ApplicationStatus.APPROVED, ApplicationStatus.DENIED, ApplicationStatus.NEEDS_INFO]),
  scoreNeed: z.number().int().min(1).max(5).optional(),
  scoreImpact: z.number().int().min(1).max(5).optional(),
  scoreTiming: z.number().int().min(1).max(5).optional(),
  notes: z.string().max(3000).optional(),
  requestMoreInfoMessage: z.string().max(2000).optional()
});

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { userId, role } = await requireRole([UserRole.ADMIN, UserRole.REVIEWER]);
    const actorRole = role as UserRole;
    const { id } = await context.params;
    const parsed = schema.parse(await req.json());

    const application = await db.application.findUnique({ where: { id } });
    if (!application) throw new Error("Application not found");

    if (role === UserRole.REVIEWER && application.assignedReviewerId && application.assignedReviewerId !== userId) {
      throw new Error("Application is assigned to a different reviewer");
    }

    const decision = await db.decision.create({
      data: {
        applicationId: id,
        reviewerId: userId,
        recommendation: parsed.recommendation,
        scoreNeed: parsed.scoreNeed,
        scoreImpact: parsed.scoreImpact,
        scoreTiming: parsed.scoreTiming,
        notes: parsed.notes
      }
    });

    await db.application.update({
      where: { id },
      data: {
        status: parsed.recommendation
      }
    });

    if (parsed.recommendation === ApplicationStatus.NEEDS_INFO && parsed.requestMoreInfoMessage) {
      const thread =
        (await db.messageThread.findFirst({ where: { applicationId: id } })) ||
        (await db.messageThread.create({ data: { applicationId: id } }));

      await db.message.create({
        data: {
          threadId: thread.id,
          senderId: userId,
          senderRole: actorRole,
          body: parsed.requestMoreInfoMessage
        }
      });
    }

    await writeAuditLog({
      actorId: userId,
      action: "APPLICATION_DECISION",
      entityType: "Application",
      entityId: id,
      metadata: {
        recommendation: parsed.recommendation,
        hasRubric: Boolean(parsed.scoreNeed || parsed.scoreImpact || parsed.scoreTiming)
      }
    });

    return ok({ decision }, 201);
  } catch (error) {
    return handleRouteError(error);
  }
}
