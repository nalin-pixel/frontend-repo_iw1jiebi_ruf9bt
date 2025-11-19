export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.6),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.6),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Structural engineering focused on safety, efficiency, and value
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Arcona Structural provides practical, code-compliant designs for residential, commercial, and industrial projects across the West. We deliver clear plans, quick turnaround, and dependable support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" className="px-6 py-3 rounded bg-orange-500 text-white hover:bg-orange-600 transition">Our Services</a>
              <a href="/contact" className="px-6 py-3 rounded border border-white/20 text-white hover:bg-white/10 transition">Contact Us</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-orange-500/30 bg-gradient-to-br from-slate-900 to-black p-1">
              <div className="w-full h-full rounded-lg bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-xl bg-orange-500/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
