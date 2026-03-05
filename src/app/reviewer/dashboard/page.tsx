export default function ReviewerDashboardPage() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-100 text-slate-900">
      <header className="shrink-0 border-b border-slate-200 bg-white px-6 py-3">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-sky-700">
              <span className="material-symbols-outlined text-3xl">biotech</span>
              <h1 className="text-lg font-black tracking-tight text-slate-900">Reviewer Portal</h1>
            </div>
            <div className="hidden h-6 w-px bg-slate-200 md:block" />
            <div className="hidden items-center gap-4 md:flex">
              <button aria-label="Previous" className="text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <div className="leading-tight">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Application 4 of 12</p>
                <p className="text-sm font-semibold">Applicant ID FF-2026-0892</p>
              </div>
              <button aria-label="Next" className="text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-slate-600">Current Queue: High Priority</span>
          </div>
        </div>
      </header>

      <main className="grid flex-1 grid-cols-1 overflow-hidden lg:grid-cols-2">
        <section className="overflow-y-auto border-r border-slate-200 bg-slate-100 p-6 lg:p-10">
          <article className="mx-auto max-w-2xl rounded-sm border border-slate-200 bg-white p-8 shadow-xl lg:p-12">
            <div className="mb-8 border-b border-slate-100 pb-6">
              <h2 className="text-2xl font-black tracking-tight text-slate-900">Grant Proposal: Fertility Access Initiative</h2>
              <p className="mt-1 text-sm text-slate-500">ID: FF-2026-0892 • Submitted: Oct 12, 2026</p>
            </div>

            <div className="space-y-8 text-slate-700">
              <section>
                <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-sky-700">I. Research Focus</h3>
                <p className="leading-relaxed">
                  Applicant research investigates long-term fertility decision-making for women in high-intensity academic and
                  clinical roles, with specific attention to institutional support disparities.
                </p>
              </section>

              <section>
                <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-sky-700">II. Financial Need and Budget</h3>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-left font-bold text-slate-700">
                        <th className="pb-2">Category</th>
                        <th className="pb-2 text-right">Requested</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600">
                      <tr>
                        <td className="py-2">Clinical Laboratory Access</td>
                        <td className="py-2 text-right">$12,500</td>
                      </tr>
                      <tr>
                        <td className="py-2">Data Analytics Personnel</td>
                        <td className="py-2 text-right">$8,000</td>
                      </tr>
                      <tr className="font-black text-slate-900">
                        <td className="pt-3">Total Request</td>
                        <td className="pt-3 text-right">$20,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-sky-700">III. Institutional Support</h3>
                <p className="leading-relaxed">
                  Department-level support letter included. Applicant has documented mentor endorsement and active institutional
                  enrollment verification.
                </p>
              </section>
            </div>
          </article>
        </section>

        <section className="overflow-y-auto bg-white p-6 lg:p-10">
          <div className="mx-auto max-w-2xl space-y-8">
            <div>
              <h2 className="text-2xl font-black tracking-tight">Review Scorecard</h2>
              <p className="mt-2 text-sm text-slate-500">Evaluate this application using the 2026 criteria. Scores remain private until submission.</p>
            </div>

            <form className="space-y-8">
              <div className="space-y-6">
                {[
                  ["Scientific Merit and Innovation", "40%"],
                  ["Demonstrated Need", "30%"],
                  ["Potential for Future Leadership", "30%"]
                ].map(([label, weight]) => (
                  <div key={label} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-bold text-slate-700">{label}</label>
                      <span className="rounded bg-sky-100 px-2 py-1 text-xs font-black text-sky-700">Weight: {weight}</span>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {[1, 2, 3, 4, 5].map((score) => (
                        <button
                          key={`${label}-${score}`}
                          className={`rounded border py-2 text-sm font-bold transition ${
                            score === 4 ? "border-sky-600 bg-sky-50 text-sky-700" : "border-slate-200 text-slate-600 hover:border-sky-300"
                          }`}
                          type="button"
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Internal Reviewer Comments</label>
                <textarea
                  className="h-32 w-full rounded-lg border-slate-300 bg-slate-50 px-4 py-3 text-sm"
                  placeholder="Provide context for your scoring."
                />
                <p className="mt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  Visible only to board members
                </p>
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-8">
                <div className="grid grid-cols-2 gap-3">
                  <button className="rounded-xl border-2 border-slate-200 px-4 py-3 text-sm font-black text-slate-600" type="button">
                    Request Info
                  </button>
                  <button className="rounded-xl border-2 border-red-100 bg-red-50 px-4 py-3 text-sm font-black text-red-600" type="button">
                    Decline
                  </button>
                </div>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-4 text-base font-black text-white" type="submit">
                  <span className="material-symbols-outlined">verified</span>
                  Approve Grant Application
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
