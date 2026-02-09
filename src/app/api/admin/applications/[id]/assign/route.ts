import { UserRole } from "@prisma/client";
import { z } from "zod";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/authz";
import { handleRouteError, ok } from "@/lib/http";
import { writeAuditLog } from "@/lib/audit";

const schema = z.object({
  reviewerId: z.string().min(1),
  anonymizedForReview: z.boolean().default(true)
});

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { userId } = await requireRole([UserRole.ADMIN]);
    const { id } = await context.params;
    const parsed = schema.parse(await req.json());

    const reviewer = await db.user.findUnique({ where: { id: parsed.reviewerId } });
    if (!reviewer || (reviewer.role !== UserRole.REVIEWER && reviewer.role !== UserRole.ADMIN)) {
      throw new Error("Selected reviewer is not allowed");
    }

    const application = await db.application.update({
      where: { id },
      data: {
        assignedReviewerId: parsed.reviewerId,
        anonymizedForReview: parsed.anonymizedForReview
      }
    });

    await writeAuditLog({
      actorId: userId,
      action: "ASSIGN_REVIEWER",
      entityType: "Application",
      entityId: id,
      metadata: {
        reviewerId: parsed.reviewerId,
        anonymizedForReview: parsed.anonymizedForReview
      }
    });

    return ok({ application });
  } catch (error) {
    return handleRouteError(error);
  }
}
