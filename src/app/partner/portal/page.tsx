import Link from "next/link";

export default function PartnerPortalPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white px-6 py-3 lg:px-10">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-sky-700">
            <span className="material-symbols-outlined text-3xl">biotech</span>
            <h1 className="text-lg font-black tracking-tight text-slate-900">FemFuture Partner Portal</h1>
          </div>

          <nav className="hidden items-center gap-9 md:flex">
            <Link className="text-sm font-bold text-sky-700" href="/partner/portal">
              Advocacy Dashboard
            </Link>
            <Link className="text-sm font-medium text-slate-600 hover:text-sky-700" href="/partner/resources">
              Policy Benchmarks
            </Link>
            <Link className="text-sm font-medium text-slate-600 hover:text-sky-700" href="/partner/meeting-request">
              Impact Reports
            </Link>
          </nav>

          <div className="hidden items-center gap-3 border-l border-slate-200 pl-3 sm:flex">
            <div
              className="h-9 w-9 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCN_-wYVryuBgDSGhV_mFsTsYOyMDYv7mPLkTHBgMP6CldXEEjKHNbkSb5E9ms1tpzBJSkwHwCRvTQiCTf5cjSadEwYwnOsME43JjsuV5qkIxi65lMsOMvpqchlv76w9V61ejiYrQbjgRKiPL4ZG35RX_vUFeIhMZLrAsZHc6YEhc3v7vCjGMUr-FCZd4T9iBIhcriQb4nIjhPXzFQApf0Ny9Fgckdg-1ENuYFEWpG6fP-53_hMuNlLzUFpbIg91zWAPA0ktkEEsnhR')"
              }}
            />
            <div>
              <p className="text-xs font-bold text-slate-800">Dean Eleanor Vance</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Stanford University</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-[290px_1fr] lg:px-8">
        <aside className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6">
          <div>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Strategic Advocacy</h2>
            <nav className="space-y-1">
              <Link className="flex items-center gap-3 rounded-lg bg-sky-100 px-3 py-2.5 text-sm font-bold text-sky-700" href="/partner/portal">
                <span className="material-symbols-outlined">analytics</span>
                Institutional Overview
              </Link>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50" href="/partner/resources">
                <span className="material-symbols-outlined">account_balance</span>
                Peer Benchmarking
              </Link>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50" href="/partner/pilot-interest">
                <span className="material-symbols-outlined">fact_check</span>
                Policy Adoption Kit
              </Link>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50" href="/partner/meeting-request">
                <span className="material-symbols-outlined">groups</span>
                Stakeholder Mapping
              </Link>
            </nav>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex items-end justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Coverage Maturity</span>
              <span className="text-lg font-black">B+</span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-200">
              <div className="h-full w-[78%] rounded-full bg-sky-600" />
            </div>
            <p className="mt-2 text-[10px] text-slate-500">78th percentile among peer institutions</p>
          </div>

          <div className="rounded-xl bg-slate-900 p-5 text-white">
            <h3 className="text-sm font-bold">Advocacy Sync</h3>
            <p className="mt-2 text-xs text-slate-300">Review your Q3 adoption roadmap with FemFuture policy experts.</p>
            <button className="mt-4 w-full rounded-lg bg-sky-600 py-2 text-xs font-bold">Schedule Sync</button>
          </div>
        </aside>

        <section className="space-y-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="text-sky-700">Stanford University</span>
                <span className="material-symbols-outlined text-[10px]">circle</span>
                Institutional Partner
              </p>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 lg:text-4xl">Partner Advocacy Dashboard</h2>
              <p className="mt-2 text-lg text-slate-600">Driving systemic change in fertility support across academic medicine.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button aria-label="Download partner policy adoption kit" className="rounded-xl border-2 border-slate-300 px-6 py-3 text-sm font-black text-slate-700">
                Download Policy Kit
              </button>
              <button aria-label="Schedule partner advocacy sync meeting" className="rounded-xl bg-sky-600 px-6 py-3 text-sm font-black text-white">
                Schedule Sync
              </button>
            </div>
          </div>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Fertility Benefit Coverage</h3>
                  <p className="text-xs text-slate-500">Lifetime maximum coverage comparison (USD)</p>
                </div>
                <select className="rounded-lg border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold">
                  <option>Peer Group: Ivy+</option>
                </select>
              </div>

              <div className="flex h-64 items-end justify-between gap-2 border-b border-slate-100 pb-2">
                {[60, 85, 45, 70, 55, 65].map((height, index) => (
                  <div key={`bar-${height}`} className="flex w-full flex-col items-center gap-2">
                    <div
                      className={`w-full rounded-t-sm ${index === 1 ? "bg-sky-600" : "bg-sky-200"}`}
                      style={{ height: `${height}%` }}
                      title={`${height}`}
                    />
                    <span className={`text-[10px] font-bold ${index === 1 ? "text-sky-700" : "text-slate-400"}`}>
                      {index === 0 && "Harvard"}
                      {index === 1 && "Stanford"}
                      {index === 2 && "Yale"}
                      {index === 3 && "Johns Hopkins"}
                      {index === 4 && "Columbia"}
                      {index === 5 && "Penn"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-600" /> Stanford ($45k)
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-200" /> Peer Average ($32k)
                </span>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold">Workforce Adoption</h3>
              <p className="text-xs text-slate-500">Utilization among female faculty</p>
              <div className="my-8 flex justify-center">
                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border-8 border-sky-100 bg-white">
                  <p className="text-2xl font-black text-slate-900">42%</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">YoY Increase</p>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <p className="flex items-center justify-between">
                  <span className="text-slate-500">Active Beneficiaries</span>
                  <span className="font-bold">142</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-slate-500">Waitlist Reduction</span>
                  <span className="font-bold text-emerald-600">-18%</span>
                </p>
              </div>
            </article>
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <article className="space-y-6 lg:col-span-3">
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="rounded-xl bg-sky-600 p-3 text-white">
                    <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black">Current Advocacy Status</h3>
                    <p className="text-slate-600">Institutional Review Phase: Comprehensive Policy Adoption</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-t border-sky-200 pt-6 text-xs">
                  <div>
                    <p className="font-bold uppercase tracking-wider text-slate-500">Status</p>
                    <p className="mt-1 font-black text-sky-700">Active Review</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-slate-500">Target Date</p>
                    <p className="mt-1 font-black text-slate-900">Nov 15, 2026</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-slate-500">Next Milestone</p>
                    <p className="mt-1 font-black text-slate-900">Trustee Board Vote</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="mb-5 text-lg font-bold">Recent Policy Impact Insights</h3>
                <div className="space-y-5 text-sm">
                  <div>
                    <h4 className="font-bold text-slate-900">Retention Correlation</h4>
                    <p className="mt-1 text-slate-600">15% higher retention among female faculty where primary fertility coverage exists.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Recruitment Messaging</h4>
                    <p className="mt-1 text-slate-600">Institutions promoting these benefits see stronger applicant pool diversity and yield.</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <span className="material-symbols-outlined text-sky-700">assignment_turned_in</span>
                Next Steps Checklist
              </h3>
              <div aria-label="Policy adoption checklist" className="space-y-3">
                {[
                  { task: "Draft Institutional Needs Assessment", done: true },
                  { task: "Map Stakeholder Governance Structure", done: true },
                  { task: "Submit Q4 Budget Adjustment Proposal", done: false },
                  { task: "Finalize Employee Handbook Updates", done: false },
                  { task: "Schedule Open Enrollment Webinar", done: false }
                ].map((item) => (
                  <div
                    key={item.task}
                    className={`flex items-center gap-3 rounded-xl border p-3 ${
                      item.done ? "border-slate-200 bg-slate-50" : "border-sky-200 bg-sky-50"
                    }`}
                  >
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded border-2 ${
                        item.done ? "border-sky-600 bg-sky-600 text-white" : "border-slate-300"
                      }`}
                    >
                      {item.done ? <span className="material-symbols-outlined text-xs">check</span> : null}
                    </div>
                    <span className={`text-sm ${item.done ? "text-slate-500 line-through" : "font-bold text-slate-900"}`}>{item.task}</span>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </section>
      </main>
    </div>
  );
}
