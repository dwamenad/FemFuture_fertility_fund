import { PortalShell } from "@/components/layout/portal-shell";

const links = [
  { href: "/reviewer/dashboard", label: "Assigned reviews" },
  { href: "/reviewer/rubric", label: "Rubric" }
];

export default function ReviewerDashboardPage() {
  return (
    <PortalShell title="Reviewer Workspace" links={links}>
      <h2 className="text-xl font-semibold">Anonymized application queue</h2>
      <p className="mt-2 text-slate-700">Reviewer mode hides applicant identity and supports scoring rubric input.</p>
    </PortalShell>
  );
}
