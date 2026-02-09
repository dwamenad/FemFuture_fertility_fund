import { AcademicStage, ApplicationStatus, RequestType } from "@prisma/client";
import { z } from "zod";

export const step1Schema = z.object({
  legalFirstName: z.string().min(1).max(100),
  legalLastName: z.string().min(1).max(100),
  phone: z.string().min(7).max(30),
  city: z.string().min(1).max(120),
  state: z.string().min(1).max(120),
  pronouns: z.string().max(100).optional().or(z.literal(""))
});

export const step2Schema = z.object({
  institutionName: z.string().min(2).max(200),
  academicStage: z.nativeEnum(AcademicStage),
  expectedCompletionAt: z.string().date()
});

export const step3Schema = z.object({
  requestType: z.nativeEnum(RequestType),
  targetProcedureDate: z.string().date(),
  timelineNotes: z.string().max(1000).optional().or(z.literal(""))
});

export const step4Schema = z.object({
  householdIncomeBand: z.enum(["UNDER_50K", "50K_100K", "100K_150K", "ABOVE_150K"]),
  availableSavingsBand: z.enum(["UNDER_5K", "5K_20K", "ABOVE_20K"]),
  dependentsCount: z.number().int().min(0).max(20),
  receivesInstitutionalSupport: z.boolean(),
  requestedAmountCents: z.number().int().min(10000).max(5000000)
});

export const step5Schema = z.object({
  enrollmentVerificationUploaded: z.boolean(),
  clinicEstimateUploaded: z.boolean()
});

export const step6Schema = z.object({
  optionalStatement: z.string().max(3000).optional().or(z.literal(""))
});

export const stepSchemas = {
  1: step1Schema,
  2: step2Schema,
  3: step3Schema,
  4: step4Schema,
  5: step5Schema,
  6: step6Schema
} as const;

export const saveStepSchema = z.object({
  applicationId: z.string().min(1),
  step: z.number().int().min(1).max(6),
  data: z.record(z.any()),
  isComplete: z.boolean().default(true)
});

export const submitSchema = z.object({
  applicationId: z.string().min(1)
});

export const decisionSchema = z.object({
  applicationId: z.string().min(1),
  recommendation: z.enum([ApplicationStatus.APPROVED, ApplicationStatus.DENIED, ApplicationStatus.NEEDS_INFO]),
  scoreNeed: z.number().int().min(1).max(5).optional(),
  scoreImpact: z.number().int().min(1).max(5).optional(),
  scoreTiming: z.number().int().min(1).max(5).optional(),
  notes: z.string().max(3000).optional()
});

export const assignReviewerSchema = z.object({
  applicationId: z.string().min(1),
  reviewerId: z.string().min(1),
  anonymizedForReview: z.boolean().default(true)
});

export function calculateNeedScore(input: z.infer<typeof step4Schema>): number {
  let score = 0;

  if (input.householdIncomeBand === "UNDER_50K") score += 40;
  if (input.householdIncomeBand === "50K_100K") score += 25;
  if (input.householdIncomeBand === "100K_150K") score += 10;

  if (input.availableSavingsBand === "UNDER_5K") score += 30;
  if (input.availableSavingsBand === "5K_20K") score += 15;

  score += Math.min(input.dependentsCount * 4, 20);

  if (!input.receivesInstitutionalSupport) score += 10;

  return Math.min(score, 100);
}
