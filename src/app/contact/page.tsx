export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="text-slate-700">Contact submissions will create a lead record and trigger an email notification in a later step.</p>
      <form className="grid gap-3 md:max-w-xl">
        <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Name" aria-label="Name" />
        <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Email" aria-label="Email" />
        <textarea className="rounded-md border border-slate-300 px-3 py-2" rows={4} placeholder="Message" aria-label="Message" />
        <button className="rounded-md bg-teal-700 px-4 py-2 text-white hover:bg-teal-800" type="button">Submit</button>
      </form>
    </section>
  );
}
