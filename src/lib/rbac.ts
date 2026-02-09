import { UserRole } from "@prisma/client";

export const ROLE_PATH_PREFIX: Record<string, UserRole[]> = {
  "/applicant": [UserRole.APPLICANT, UserRole.ADMIN],
  "/donor": [UserRole.DONOR, UserRole.ADMIN],
  "/partner/portal": [UserRole.PARTNER, UserRole.ADMIN],
  "/admin": [UserRole.ADMIN],
  "/reviewer": [UserRole.REVIEWER, UserRole.ADMIN]
};

export function canAccessPath(pathname: string, role?: UserRole | null): boolean {
  const match = Object.entries(ROLE_PATH_PREFIX).find(([prefix]) => pathname.startsWith(prefix));
  if (!match) return true;
  if (!role) return false;
  return match[1].includes(role);
}
