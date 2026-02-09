export default function ImpactPage() {
  const metrics = [
    { label: "Applications supported", value: "128" },
    { label: "Awards issued", value: "74" },
    { label: "Institution partners", value: "16" }
  ];

  return (
    <section className="space-y-5">
      <h1 className="text-2xl font-semibold">Impact</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-3xl font-bold text-teal-700">{metric.value}</p>
            <p className="text-sm text-slate-600">{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
