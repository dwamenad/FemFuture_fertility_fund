import Link from "next/link";

export default function PartnerPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Partner</h1>
      <p className="text-slate-700">Institutions, insurers, and clinics can submit inquiry and pilot-program interest.</p>
      <Link href="/partner/portal" className="inline-flex rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-50">
        Partner portal
      </Link>
    </section>
  );
}
