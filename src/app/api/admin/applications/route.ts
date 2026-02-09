import { ApplicationStatus, AcademicStage, RequestType, UserRole } from "@prisma/client";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/authz";
import { handleRouteError, ok } from "@/lib/http";

export async function GET(request: Request) {
  try {
    const { role } = await requireRole([UserRole.ADMIN, UserRole.REVIEWER]);
    const { searchParams } = new URL(request.url);

    const status = searchParams.get("status") as ApplicationStatus | null;
    const requestType = searchParams.get("requestType") as RequestType | null;
    const academicStage = searchParams.get("academicStage") as AcademicStage | null;

    const applications = await db.application.findMany({
      where: {
        status: status ?? undefined,
        requestType: requestType ?? undefined,
        academicStage: academicStage ?? undefined
      },
      include: {
        applicantProfile: {
          include: {
            user: {
              select: {
                name: true,
                email: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    const data =
      role === UserRole.REVIEWER
        ? applications.map((application) => ({
            ...application,
            applicantProfile: application.anonymizedForReview
              ? {
                  ...application.applicantProfile,
                  user: {
                    name: "Hidden",
                    email: "hidden@hidden"
                  }
                }
              : application.applicantProfile
          }))
        : applications;

    return ok({ applications: data });
  } catch (error) {
    return handleRouteError(error);
  }
}
