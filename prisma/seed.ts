import { PrismaClient, UserRole, ApplicationStatus, RequestType, AcademicStage } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("Password123!", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@femfuture.org" },
    update: {},
    create: { name: "Admin User", email: "admin@femfuture.org", passwordHash, role: UserRole.ADMIN }
  });

  await prisma.user.upsert({
    where: { email: "reviewer@femfuture.org" },
    update: {},
    create: { name: "Reviewer User", email: "reviewer@femfuture.org", passwordHash, role: UserRole.REVIEWER }
  });

  const applicantUser = await prisma.user.upsert({
    where: { email: "applicant@femfuture.org" },
    update: {},
    create: { name: "Applicant User", email: "applicant@femfuture.org", passwordHash, role: UserRole.APPLICANT }
  });

  await prisma.user.upsert({
    where: { email: "donor@femfuture.org" },
    update: {},
    create: { name: "Donor User", email: "donor@femfuture.org", passwordHash, role: UserRole.DONOR }
  });

  await prisma.user.upsert({
    where: { email: "partner@femfuture.org" },
    update: {},
    create: { name: "Partner User", email: "partner@femfuture.org", passwordHash, role: UserRole.PARTNER }
  });

  const profile = await prisma.applicantProfile.upsert({
    where: { userId: applicantUser.id },
    update: {},
    create: {
      userId: applicantUser.id,
      legalFirstName: "Jordan",
      legalLastName: "Lee",
      phone: "+1-555-0102"
    }
  });

  const app = await prisma.application.create({
    data: {
      applicantProfileId: profile.id,
      status: ApplicationStatus.SUBMITTED,
      requestType: RequestType.EGG_FREEZING,
      academicStage: AcademicStage.RESIDENCY,
      needScore: 79,
      submittedAt: new Date(),
      steps: {
        create: [
          { step: 1, isComplete: true, data: { city: "Boston", state: "MA" } },
          { step: 2, isComplete: true, data: { institution: "Teaching Hospital", expectedCompletionAt: "2028-06-30" } }
        ]
      }
    }
  });

  await prisma.auditLog.create({
    data: {
      actorId: admin.id,
      action: "SEEDED_APPLICATION_CREATED",
      entityType: "Application",
      entityId: app.id,
      metadata: { source: "seed" }
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
