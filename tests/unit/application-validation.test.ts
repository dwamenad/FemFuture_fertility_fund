import { describe, expect, it } from "vitest";
import { calculateNeedScore, step4Schema } from "@/lib/validators/application";

describe("application validators", () => {
  it("computes high need score for low income and savings", () => {
    const data = step4Schema.parse({
      householdIncomeBand: "UNDER_50K",
      availableSavingsBand: "UNDER_5K",
      dependentsCount: 2,
      receivesInstitutionalSupport: false,
      requestedAmountCents: 250000
    });

    expect(calculateNeedScore(data)).toBe(88);
  });

  it("caps need score at 100", () => {
    const data = step4Schema.parse({
      householdIncomeBand: "UNDER_50K",
      availableSavingsBand: "UNDER_5K",
      dependentsCount: 20,
      receivesInstitutionalSupport: false,
      requestedAmountCents: 500000
    });

    expect(calculateNeedScore(data)).toBe(100);
  });
});
