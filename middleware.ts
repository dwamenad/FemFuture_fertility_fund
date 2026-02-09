import { NextResponse } from "next/server";
import { auth } from "./auth";
import { canAccessPath } from "@/lib/rbac";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const role = req.auth?.user?.role ?? null;

  const isProtected = ["/applicant", "/donor", "/partner/portal", "/admin", "/reviewer"].some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (!isProtected) return NextResponse.next();

  if (!req.auth?.user) {
    const url = new URL("/auth/sign-in", req.url);
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  if (!canAccessPath(pathname, role)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/applicant/:path*", "/donor/:path*", "/partner/portal/:path*", "/admin/:path*", "/reviewer/:path*"]
};
