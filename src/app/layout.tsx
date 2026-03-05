import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "FemFuture Fertility Fund",
  description: "Financial support and advocacy for fertility preservation in academia."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-manrope`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
