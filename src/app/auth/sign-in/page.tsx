export default function SignInPage() {
  return (
    <section className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-6">
      <h1 className="text-xl font-semibold">Sign in</h1>
      <p className="mt-2 text-sm text-slate-600">Email + password auth will be wired to Auth.js credentials provider.</p>
      <form className="mt-4 space-y-3">
        <input className="w-full rounded-md border border-slate-300 px-3 py-2" type="email" placeholder="Email" aria-label="Email" />
        <input className="w-full rounded-md border border-slate-300 px-3 py-2" type="password" placeholder="Password" aria-label="Password" />
        <button className="w-full rounded-md bg-teal-700 px-4 py-2 text-white hover:bg-teal-800" type="button">Sign in</button>
      </form>
    </section>
  );
}
