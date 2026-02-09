import { NextResponse } from "next/server";
import { AuthError } from "@/lib/authz";

export function ok<T>(data: T, status = 200) {
  return NextResponse.json(data, { status });
}

export function fail(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export function handleRouteError(error: unknown) {
  if (error instanceof AuthError) {
    return fail(error.message, error.status);
  }

  if (error instanceof Error) {
    return fail(error.message, 400);
  }

  return fail("Unexpected error", 500);
}
