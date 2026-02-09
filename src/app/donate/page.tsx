import Link from "next/link";

export default function DonatePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Donate</h1>
      <p className="text-slate-700">Stripe checkout will be used when keys are configured. Dev mode can display a payment-disabled stub.</p>
      <Link href="/donor/dashboard" className="inline-flex rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-50">
        Open donor dashboard
      </Link>
    </section>
  );
}
