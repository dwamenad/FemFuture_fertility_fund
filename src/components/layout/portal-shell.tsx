"use client";

import Link from "next/link";
import type { Route } from "next";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export function PortalShell({
  title,
  links,
  children
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <section className="grid gap-6 lg:grid-cols-[250px_1fr]">
      <aside className="rounded-xl border border-slate-200 bg-white p-4">
        <h1 className="mb-3 text-lg font-semibold">{title}</h1>
        <nav aria-label={`${title} navigation`} className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              href={link.href as Route}
              className={`block rounded-md px-3 py-2 text-sm ${
                pathname === link.href ? "bg-slate-100 font-semibold text-slate-900" : "hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="rounded-xl border border-slate-200 bg-white p-6">{children}</div>
    </section>
  );
}
