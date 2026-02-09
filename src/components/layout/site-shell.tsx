import Link from "next/link";
import { ReactNode } from "react";

const nav = [
  { href: "/", label: "Public" },
  { href: "/apply", label: "Apply" },
  { href: "/donate", label: "Donate" },
  { href: "/partner", label: "Partner" },
  { href: "/auth/sign-in", label: "Sign in" }
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
      <header className="sticky top-0 z-20 mt-4 rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-semibold text-teal-700">
            FemFuture Fertility Fund
          </Link>
          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-2 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-1.5 text-slate-700 transition hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="py-8">{children}</main>
      <footer className="mb-6 mt-auto rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
        <p>FemFuture Fertility Fund MVP. Accessibility-first, data-minimized prototype.</p>
      </footer>
    </div>
  );
}
