import { PortalShell } from "@/components/layout/portal-shell";

const links = [
  { href: "/admin/dashboard", label: "Applications" },
  { href: "/admin/reviewers", label: "Reviewer assignment" },
  { href: "/admin/awards", label: "Awards" },
  { href: "/admin/audit-logs", label: "Audit logs" }
];

export default function AdminDashboardPage() {
  return (
    <PortalShell title="Admin Dashboard" links={links}>
      <h2 className="text-xl font-semibold">Application management</h2>
      <p className="mt-2 text-slate-700">Filter by status, program, request type; assign reviewer; issue decisions and awards.</p>
    </PortalShell>
  );
}
