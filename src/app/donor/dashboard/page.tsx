import Link from "next/link";

const stories = [
  {
    name: "Dr. A, Resident",
    role: "Oncology Research",
    quote:
      "The fertility preservation grant allowed me to focus on residency without the stress of timing family goals against training milestones.",
    tone: "bg-teal-700 text-white"
  },
  {
    name: "Researcher M, PhD",
    role: "Neuroscience Faculty",
    quote: "Support from FemFuture bridged the gap between my clinical trials and family planning.",
    tone: "bg-slate-900 text-white"
  },
  {
    name: "Clinical Fellow S",
    role: "Cardiology",
    quote: "Knowing donors understand our unique constraints gave me confidence to pursue fellowship.",
    tone: "border-2 border-teal-200 bg-white text-slate-800"
  }
];

export default function DonorDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white px-6 py-4 lg:px-10">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
              <span className="material-symbols-outlined">diversity_1</span>
            </div>
            <h1 className="text-xl font-black text-slate-900">
              FemFuture <span className="text-teal-600">Fund</span>
            </h1>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <Link className="text-sm font-bold text-teal-700" href="/donor/dashboard">
              Impact Dashboard
            </Link>
            <Link className="text-sm font-medium text-slate-600 hover:text-teal-700" href="/donor/donations">
              History
            </Link>
            <Link className="text-sm font-medium text-slate-600 hover:text-teal-700" href="/donor/updates">
              Community
            </Link>
          </nav>
          <div className="hidden items-center gap-3 border-l border-slate-200 pl-4 sm:flex">
            <div
              className="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-teal-100"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABDHWQW7aDzf6ZJoJ19b3l81m3BrkZFK6_pMhBL8uj9f3g_DsBC60H8w7GLw2s9QBIPAJlc0QEof05FaAZjld7v0SAXa0Ws7UpE56Xs95z3l8EJjK2mp0ahrAYqOn3Xq7sCue6bqu4mucqwsqnevjuV9dw6rPNkxXycETuZNdJeSP8M6WIuIHTN3aqE7uQ7yF9Trv-a2vAhKlciyTHSGE3vuisNYZZ5vlVKV572nxjBkc0g0v6Tbw-3msslfb_kOhDJsAjklFi3j8V')"
              }}
            />
            <div>
              <p className="text-xs font-bold text-slate-900">Eleanor Vance</p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-700">Visionary Donor</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="space-y-8 rounded-2xl border border-slate-200 bg-white p-5">
          <div>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Management</h2>
            <nav className="space-y-1">
              <Link className="flex items-center gap-3 rounded-xl bg-teal-100 px-4 py-3 text-sm font-bold text-teal-700" href="/donor/dashboard">
                <span className="material-symbols-outlined">dashboard</span>
                Impact Overview
              </Link>
              <Link className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50" href="/donor/receipts">
                <span className="material-symbols-outlined">receipt_long</span>
                Tax Documents
              </Link>
              <Link className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50" href="/donor/updates">
                <span className="material-symbols-outlined">groups</span>
                Community Updates
              </Link>
            </nav>
          </div>

          <div className="rounded-2xl bg-slate-900 p-5 text-white">
            <h3 className="text-sm font-bold">Continue the Legacy</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">Your contributions supported 14 women in medicine this year.</p>
            <button aria-label="Create a new donation" className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 py-2.5 text-xs font-bold">
              <span className="material-symbols-outlined text-base">volunteer_activism</span>
              Give Again
            </button>
          </div>
        </aside>

        <section className="space-y-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Your Impact Dashboard</h2>
              <p className="mt-1 text-slate-500">Thank you for empowering the next generation of women in medicine.</p>
            </div>
            <div className="flex gap-4">
              <article className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <span className="material-symbols-outlined text-2xl">medical_services</span>
                </div>
                <div>
                  <p className="text-2xl font-black">12</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Grants Funded</p>
                </div>
              </article>
              <article className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <div>
                  <p className="text-2xl font-black">Mid-Career</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Avg Stage Supported</p>
                </div>
              </article>
            </div>
          </div>

          <section aria-label="Success stories from funded applicants">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <span className="material-symbols-outlined text-teal-700">auto_awesome</span>
                Success Stories
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {stories.map((story) => (
                <article key={story.name} className={`relative rounded-2xl p-6 ${story.tone}`}>
                  <div className="mb-4">
                    <p className="text-sm font-bold">{story.name}</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-80">{story.role}</p>
                  </div>
                  <p className="text-sm italic leading-relaxed">{story.quote}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-label="Donation allocation and transparency data" className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <article className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 xl:col-span-2">
              <h3 className="text-lg font-bold">Donation Allocation</h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-bold">Direct Grant Funding</span>
                    <span className="font-black text-teal-700">$18,450</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[75%] rounded-full bg-teal-700" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-bold">Educational Resources</span>
                    <span className="font-black text-slate-900">$2,100</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[15%] rounded-full bg-slate-800" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                    <span className="font-semibold">Operational Support</span>
                    <span className="font-bold">$1,250</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[10%] rounded-full bg-slate-300" />
                  </div>
                </div>
              </div>
            </article>

            <article className="space-y-4 rounded-2xl border border-slate-200 bg-teal-50 p-6">
              <h3 className="text-lg font-bold text-slate-900">Transparency</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Every dollar is tracked. 85% of contribution volume is currently routed to direct grant support.
              </p>
              <Link className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 text-xs font-bold" href="/donor/updates">
                Annual Impact Report 2025
                <span className="material-symbols-outlined text-sm text-slate-400">open_in_new</span>
              </Link>
              <Link className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 text-xs font-bold" href="/donor/receipts">
                Tax Receipts
                <span className="material-symbols-outlined text-sm text-slate-400">open_in_new</span>
              </Link>
            </article>
          </section>
        </section>
      </main>
    </div>
  );
}
