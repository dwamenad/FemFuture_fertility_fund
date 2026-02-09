import { NextRequest } from "next/server";
import { ApplicationStatus, UserRole } from "@prisma/client";
import { db } from "@/lib/db";
import { handleRouteError, ok } from "@/lib/http";
import { requireRole } from "@/lib/authz";

async function getOrCreateDraft(userId: string) {
  const profile = await db.applicantProfile.upsert({
    where: { userId },
    update: {},
    create: { userId }
  });

  const existing = await db.application.findFirst({
    where: {
      applicantProfileId: profile.id,
      status: {
        in: [ApplicationStatus.DRAFT, ApplicationStatus.NEEDS_INFO]
      }
    },
    include: {
      steps: {
        orderBy: { step: "asc" }
      }
    },
    orderBy: { updatedAt: "desc" }
  });

  if (existing) return existing;

  return db.application.create({
    data: {
      applicantProfileId: profile.id,
      status: ApplicationStatus.DRAFT
    },
    include: {
      steps: {
        orderBy: { step: "asc" }
      }
    }
  });
}

export async function GET() {
  try {
    const { userId } = await requireRole([UserRole.APPLICANT, UserRole.ADMIN]);
    const application = await getOrCreateDraft(userId);
    return ok({ application });
  } catch (error) {
    return handleRouteError(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await requireRole([UserRole.APPLICANT, UserRole.ADMIN]);
    const body = await req.json().catch(() => ({}));
    const forceNew = Boolean(body.forceNew);

    if (!forceNew) {
      const application = await getOrCreateDraft(userId);
      return ok({ application });
    }

    const profile = await db.applicantProfile.upsert({
      where: { userId },
      update: {},
      create: { userId }
    });

    const application = await db.application.create({
      data: {
        applicantProfileId: profile.id,
        status: ApplicationStatus.DRAFT
      }
    });

    return ok({ application }, 201);
  } catch (error) {
    return handleRouteError(error);
  }
}
