import Link from "next/link";

export default function ApplyPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Apply</h1>
      <p className="text-slate-700">Start with a quick eligibility pre-check, then complete the 6-step application.</p>
      <Link href="/applicant/dashboard" className="inline-flex rounded-md bg-teal-700 px-4 py-2 text-white hover:bg-teal-800">
        Open applicant portal
      </Link>
    </section>
  );
}
