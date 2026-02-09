import { PortalShell } from "@/components/layout/portal-shell";

const links = [
  { href: "/applicant/dashboard", label: "Overview" },
  { href: "/applicant/application", label: "Application" },
  { href: "/applicant/messages", label: "Messages" },
  { href: "/applicant/documents", label: "Documents" }
];

export default function ApplicantDashboardPage() {
  return (
    <PortalShell title="Applicant Portal" links={links}>
      <h2 className="text-xl font-semibold">Application status timeline</h2>
      <p className="mt-2 text-slate-700">Draft to Submitted to Under review to Decision to Award.</p>
    </PortalShell>
  );
}
