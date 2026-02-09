import { describe, expect, it } from "vitest";
import { UserRole } from "@prisma/client";
import { canAccessPath } from "@/lib/rbac";

describe("canAccessPath", () => {
  it("allows admin to access admin paths", () => {
    expect(canAccessPath("/admin/dashboard", UserRole.ADMIN)).toBe(true);
  });

  it("denies donor from admin paths", () => {
    expect(canAccessPath("/admin/dashboard", UserRole.DONOR)).toBe(false);
  });
});
