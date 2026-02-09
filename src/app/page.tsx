import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-50 to-cyan-50 p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Fertility support for women in long academic tracks.</h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          FemFuture provides grant funding for egg freezing and IVF and helps institutions integrate fertility preservation into health plans.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/apply" className="rounded-md bg-teal-700 px-4 py-2 text-white hover:bg-teal-800">Apply</Link>
          <Link href="/donate" className="rounded-md border border-slate-300 px-4 py-2 hover:bg-white">Donate</Link>
          <Link href="/partner" className="rounded-md border border-slate-300 px-4 py-2 hover:bg-white">Partner with us</Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Egg Freezing Grants", "Bridge coverage gaps during training years."],
          ["IVF Support", "Targeted funding for applicants with highest financial need."],
          ["Institutional Advocacy", "Templates and policy support for universities and hospitals."]
        ].map(([title, copy]) => (
          <article key={title} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-slate-600">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
