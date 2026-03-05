import Link from "next/link";

export default function ApplicantDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white px-6 py-3 lg:px-10">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-sky-600">
            <span className="material-symbols-outlined text-3xl">biotech</span>
            <h1 className="text-lg font-black tracking-tight text-slate-900">FemFuture Fertility Fund</h1>
          </div>
          <div className="flex items-center gap-3">
            <button aria-label="Notifications" className="rounded-lg bg-slate-100 p-2 text-slate-600">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="hidden items-center gap-3 border-l border-slate-200 pl-3 sm:flex">
              <div
                className="h-9 w-9 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhgUcXRNxdIZ9WhstpK-_llIE5nfwjG5_O3jzFGWaNfbvNOTFcEHukTZ2aVpgedRuhx6WFujMiRU3sjqHVb11i56x5kHQN0Mbip5OO1WpJOf4nrCiGZAWV3YR12WZABk5vfMJXqXJNyphe20RAAvCYK5D6UZolwVSTDMvFjbNhIX-bAgeDkHLvs6MG72W7YynC4khQdH71KKqWiqNVwXGbbiQRzvm29VVKgZf3xLoQAuSuSrbwTB3A1TQdzaBarbyx-nOmSdWz5gG0')"
                }}
              />
              <span className="text-sm font-semibold text-slate-700">Dr. Sarah Jenkins</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 lg:h-[calc(100vh-140px)] lg:overflow-auto">
          <h2 className="mb-4 text-xs font-extrabold uppercase tracking-[0.15em] text-slate-400">Portal Sections</h2>
          <nav className="space-y-1">
            <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50" href="/applicant/dashboard">
              <span className="material-symbols-outlined text-xl">dashboard</span>
              Overview
            </Link>
            <Link className="flex items-center gap-3 rounded-lg bg-sky-100 px-3 py-2 text-sm font-bold text-sky-700" href="/applicant/application">
              <span className="material-symbols-outlined text-xl">description</span>
              Application Form
            </Link>
            <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50" href="/applicant/messages">
              <span className="material-symbols-outlined text-xl">forum</span>
              Messages
            </Link>
            <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50" href="/applicant/documents">
              <span className="material-symbols-outlined text-xl">shield</span>
              Document Vault
            </Link>
          </nav>

          <div className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-sky-700">
              <span className="material-symbols-outlined text-lg">info</span>
              <span className="text-xs font-extrabold uppercase">Compassionate Support</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              We understand the pressure of training years. Your case advisor can help unblock your application quickly.
            </p>
            <button className="mt-4 w-full rounded-lg bg-sky-600 py-2 text-xs font-bold text-white">Contact Advisor</button>
          </div>

          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-500">Application progress</span>
              <span className="font-black text-sky-700">45%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[45%] rounded-full bg-sky-600" />
            </div>
          </div>
        </aside>

        <section className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 lg:p-10">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span>Home</span>
              <span className="material-symbols-outlined text-[12px]">chevron_right</span>
              <span className="text-sky-700">Grant Application 2026</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight">Academic and Clinical Status</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Provide current institutional affiliation details so reviewers can evaluate context and support needs fairly.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {[
              { value: "check", label: "Eligibility", done: true },
              { value: "check", label: "Personal Info", done: true },
              { value: "3", label: "Status", done: false },
              { value: "4", label: "Documents", done: false }
            ].map((item, idx) => (
              <div
                key={item.label}
                aria-current={idx === 2 ? "step" : undefined}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-black ${
                    item.done ? "bg-sky-600 text-white" : idx === 2 ? "border-2 border-sky-600 text-sky-600" : "border border-slate-300 text-slate-400"
                  }`}
                >
                  {item.value === "check" ? <span className="material-symbols-outlined text-base">check</span> : item.value}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${idx === 2 ? "text-sky-700" : "text-slate-400"}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <form className="space-y-7 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="primaryInstitution">
                  Primary Institution
                </label>
                <input
                  id="primaryInstitution"
                  className="w-full rounded-lg border-slate-300 bg-white px-4 py-3 text-sm"
                  placeholder="Stanford University School of Medicine"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="department">
                  Department
                </label>
                <input id="department" className="w-full rounded-lg border-slate-300 bg-white px-4 py-3 text-sm" placeholder="Reproductive Endocrinology" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="academicTitle">
                  Current Academic Title
                </label>
                <select id="academicTitle" className="w-full rounded-lg border-slate-300 bg-white px-4 py-3 text-sm">
                  <option>PhD Candidate</option>
                  <option>Postdoctoral Fellow</option>
                  <option>Assistant Professor</option>
                  <option>Associate Professor</option>
                  <option>Full Professor</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="yearsInPosition">
                  Years in Current Position
                </label>
                <input id="yearsInPosition" className="w-full rounded-lg border-slate-300 bg-white px-4 py-3 text-sm" min={0} type="number" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="focusSummary">
                Describe your clinical or research focus
              </label>
              <textarea
                id="focusSummary"
                className="w-full rounded-lg border-slate-300 bg-white px-4 py-3 text-sm"
                placeholder="Briefly explain your current work and its impact."
                rows={4}
              />
              <p className="mt-2 text-xs italic text-slate-500">Visible only to authorized reviewers.</p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-sky-200 bg-sky-50 p-4">
              <div className="rounded-lg bg-sky-100 p-2 text-sky-700">
                <span className="material-symbols-outlined text-xl">lock</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Highly Secure Data Handling</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Your information is encrypted, minimized, and available only to authorized staff and assigned reviewers.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-5">
              <button className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-600" type="button">
                Previous Step
              </button>
              <Link className="rounded-lg bg-sky-600 px-6 py-3 text-sm font-black text-white" href="/applicant/application">
                Save and Continue
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
