import { PortalShell } from "@/components/layout/portal-shell";

const links = [
  { href: "/partner/portal", label: "Overview" },
  { href: "/partner/resources", label: "Resource library" },
  { href: "/partner/meeting-request", label: "Meeting request" },
  { href: "/partner/pilot-interest", label: "Pilot interest" }
];

export default function PartnerPortalPage() {
  return (
    <PortalShell title="Partner Portal" links={links}>
      <h2 className="text-xl font-semibold">Approved resources</h2>
      <p className="mt-2 text-slate-700">Policy briefs, case studies, and onboarding templates will be listed here.</p>
    </PortalShell>
  );
}
