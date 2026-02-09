import { PortalShell } from "@/components/layout/portal-shell";

const links = [
  { href: "/donor/dashboard", label: "Overview" },
  { href: "/donor/donations", label: "Donation history" },
  { href: "/donor/receipts", label: "Receipts" },
  { href: "/donor/updates", label: "Impact updates" }
];

export default function DonorDashboardPage() {
  return (
    <PortalShell title="Donor Portal" links={links}>
      <h2 className="text-xl font-semibold">Donation history</h2>
      <p className="mt-2 text-slate-700">View contributions, export receipts, and see impact updates.</p>
    </PortalShell>
  );
}
