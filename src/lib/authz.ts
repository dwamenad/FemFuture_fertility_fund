import { UserRole } from "@prisma/client";
import { auth } from "../../auth";

export class AuthError extends Error {
  status: number;

  constructor(message: string, status = 401) {
    super(message);
    this.status = status;
  }
}

export async function requireUser() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new AuthError("Authentication required", 401);
  }

  return {
    userId: session.user.id,
    role: session.user.role ?? null
  };
}

export async function requireRole(allowedRoles: UserRole[]) {
  const user = await requireUser();
  if (!user.role || !allowedRoles.includes(user.role)) {
    throw new AuthError("Insufficient permissions", 403);
  }
  return user;
}
