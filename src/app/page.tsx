import Link from "next/link";

const avatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA_dMGZ-FJrMK3WbbTXGoBls4kebQ1gw8UdufgSVIAiAcHYIJh5ifBN945Zl2QigZAZClv47VrhrGfLOGc1e3OjaYdaEW2jAlqZsYPCKHnjBoSZCeLjauyzi2qN_jydlNwoIXh-xYWFVMhSWnv4ilQzoLWMHodVKLxpKOx6PvoDys7tK4KYFp8UxXyiPRIPkqH8Z7pm7tewjkkeG6h2L0gME74RYlJaofeffPd_BSsqgZTM3-btE2a3nGdQm8Z0v86QjDu9FeAxuoMk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4RN70VBrLZV3ATQN4IrngC83Z5JIUiWiT_m8lM6_8yWrmgZSOjhJH8XpDQYUNZLCuDvVhVL2uXjbSC4TVrPCvJwthHFZqcqb60JPxHaQPVNX8mXx_pPYHUfdsCKUtB4F59wHuK-PMS6EBGPYLdpHlIQ_AFPP8RCID52mAnM7__njuZ64VMeOGFal6NyX09AWaQCnOgTqWAaXp4EQw3aof01B6NrQmH2hPINJmYdwnGgFw11ekG3GdtJYEZnheCiSZ7EMHoht-3TcD",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8x8D_ZggMAfJRQgC8rILiXFIA6C5lEoPbnMljCajHbQrh_vDa_uENPXKg2bHPU11ybIqtwqtuJ-PVt2yDRe0t4M4w0JCy5tS_fGUOCOsSTwpa5xsNP1GZLa6lU8mWRPKTkvQbzstyVo1ZkcTrN37O_sQr0HX8r2x2UZsJ_jSiEBJWW_bm7p_NlTGsi5QoIgb7co1_pARnkKgdDsP4Shk4fKzcmOrro_ZjOcy5RY6wm7UoKEVqmqW6L7QVjf8uT64spcr6iShW_jzq"
];

const pillars = [
  {
    icon: "payments",
    title: "Financial Grants",
    copy: "Direct funding for fertility treatments, egg freezing, and IVF to bridge institutional coverage gaps.",
    action: "Learn about eligibility"
  },
  {
    icon: "account_balance",
    title: "Institutional Advocacy",
    copy: "Working with universities and hospitals to modernize benefit packages and tenure pathways.",
    action: "Our policy roadmap"
  },
  {
    icon: "health_and_safety",
    title: "Secure Platform",
    copy: "A privacy-first application and support experience with role-based controls and clear governance.",
    action: "View security standards"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 px-6 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-sky-600">biotech</span>
            <h1 className="text-xl font-extrabold tracking-tight">FemFuture</h1>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <Link className="text-sm font-semibold text-slate-700 hover:text-sky-600" href="/why">
              Our Mission
            </Link>
            <Link className="text-sm font-semibold text-slate-700 hover:text-sky-600" href="/programs">
              Grants
            </Link>
            <Link className="text-sm font-semibold text-slate-700 hover:text-sky-600" href="/partner">
              Advocacy
            </Link>
            <Link className="text-sm font-semibold text-slate-700 hover:text-sky-600" href="/impact">
              Impact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              className="rounded-lg bg-sky-600 px-5 py-2 text-sm font-bold text-white transition hover:scale-[1.02]"
              href="/apply"
            >
              Apply for Support
            </Link>
            <Link
              className="rounded-lg border border-sky-200 bg-sky-50 px-5 py-2 text-sm font-bold text-sky-700 transition hover:bg-sky-100"
              href="/donate"
            >
              Donate
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-14 px-4 py-14 md:px-8 lg:grid-cols-2 lg:py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sky-700">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              Empowering Medical Professionals
            </div>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Fertility support for women building the future of medicine and research
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Empowering women in academia and medicine with financial grants and institutional advocacy for fertility
              preservation and family building.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="rounded-xl bg-sky-600 px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-sky-300 transition hover:bg-sky-700"
                href="/apply"
              >
                Apply for Support
              </Link>
              <Link
                className="rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-extrabold text-slate-800 transition hover:bg-slate-50"
                href="/about"
              >
                Learn More
              </Link>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <div className="flex -space-x-3">
                {avatars.map((avatar) => (
                  <div
                    key={avatar}
                    className="h-10 w-10 rounded-full border-2 border-white bg-cover bg-center"
                    style={{ backgroundImage: `url('${avatar}')` }}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold">Joined by 500+ professionals this year</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-sky-50 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
              <div
                className="aspect-[4/3] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjdOgrDay7bIP0O-Er_XXXA6Ar6OoRizyitNSqgPO5XhvRE5aHHDPL5-uVUv4JxNxUBwYaeERGprAwZpiRayPTcc7NKvwkE0A_M2lYhZNJc316zEzT_ntnePSFSt2TK5ctcXM3ay3Pvgiu9NDKBdALbI88pPvJRzCtNJ956NsBW5GAOdRtWrGdX2HuC0JoxJHcc50uR9432cFaVVbQxy_0_ZepMxJy20Ji2ArS3CBgTo9BKeVh5isLyhPFMoiBHnXtqFfu17KBZsZ5')"
                }}
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <div className="mb-14 text-center">
              <h3 className="text-3xl font-black tracking-tight md:text-4xl">Our Core Pillars</h3>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                A holistic ecosystem built for the unique career trajectories of women in STEM and healthcare.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="group flex h-full flex-col rounded-2xl border border-transparent bg-slate-50 p-8 transition hover:border-sky-200 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-700 transition group-hover:scale-110">
                    <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold">{pillar.title}</h4>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-600">{pillar.copy}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-sky-600">
                    <span>{pillar.action}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 px-4 py-20 md:px-8 lg:grid-cols-2">
          <div className="space-y-8">
            <h3 className="text-3xl font-black tracking-tight md:text-4xl">Measuring Impact</h3>
            <p className="text-lg leading-relaxed text-slate-600">
              We believe in radical transparency. Our mission is measured in dollars granted, careers retained, and policy
              outcomes delivered.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-black text-sky-600">$4.2M</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Grants Distributed</p>
              </div>
              <div>
                <p className="text-4xl font-black text-sky-600">850+</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Women Supported</p>
              </div>
              <div>
                <p className="text-4xl font-black text-sky-600">120</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Partner Institutions</p>
              </div>
              <div>
                <p className="text-4xl font-black text-sky-600">94%</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Career Retention Rate</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-sky-100 bg-sky-50 p-8">
            <div className="mb-6 flex items-center gap-4">
              <div
                className="h-12 w-12 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCW5eT-WwSrUAIClNDi81LW1qMDh6EIVtR3tVEXMLE0CkGcRF2hC6wrcSu9Kdu6OoCSVpbBEd1o1PG89_q1vhET84mMxCP8XhTIH3R8sT6BA3uj7AFttBzM7tqlj3BepbbsNVX4Evu_igIlFbW9e-Dnv7JzvumJ8HkwtAoeIajZqa54wyRUoWnQ8R3u-wBT_bDqnLFJ5hPG6e5gkOFrDE0DoFwjsVhTSZeg3_E68RnpqPnKJGmDR4CNYXIJZxTRqQpRVAyWMoBj63RU')"
                }}
              />
              <div>
                <h4 className="font-bold">Dr. Sarah Jenkins</h4>
                <p className="text-xs uppercase tracking-widest text-slate-500">Surgical Resident, MGH</p>
              </div>
            </div>
            <p className="text-lg italic leading-relaxed text-slate-700">
              The FemFuture grant allowed me to freeze my eggs during my busiest residency year. It removed the pressure
              of choosing between training and future family planning.
            </p>
            <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-3/4 rounded-full bg-sky-600" />
            </div>
          </div>
        </section>

        <section className="bg-sky-600 px-4 py-16 text-center text-white">
          <div className="mx-auto max-w-[800px] space-y-6">
            <h3 className="text-4xl font-black tracking-tight md:text-5xl">Ready to build your future?</h3>
            <p className="text-lg text-white/85 md:text-xl">
              Applications are open. Join a community that understands your path and backs your long-term goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link className="rounded-xl bg-white px-8 py-4 text-lg font-black text-sky-700" href="/apply">
                Start Application
              </Link>
              <Link className="rounded-xl border border-white/40 bg-sky-500 px-8 py-4 text-lg font-black" href="/donate">
                Support Our Mission
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f6f7f8] px-6 py-12 md:px-10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl text-sky-600">biotech</span>
              <h4 className="text-lg font-bold">FemFuture</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              A 501(c)(3) nonprofit helping women in medicine and research preserve fertility options while pursuing
              demanding career paths.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3 md:gap-12">
            <div className="space-y-3">
              <h5 className="font-bold uppercase tracking-wider text-slate-800">Organization</h5>
              <div className="space-y-1 text-slate-500">
                <p>About Us</p>
                <p>Our Team</p>
                <p>Annual Report</p>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="font-bold uppercase tracking-wider text-slate-800">Support</h5>
              <div className="space-y-1 text-slate-500">
                <p>Apply for Grant</p>
                <p>Resources</p>
                <p>FAQ</p>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="font-bold uppercase tracking-wider text-slate-800">Contact</h5>
              <div className="space-y-1 text-slate-500">
                <p>contact@femfuture.org</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
