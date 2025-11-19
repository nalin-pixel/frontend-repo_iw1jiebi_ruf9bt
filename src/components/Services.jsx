const services = [
  {
    title: 'Residential Home Design',
    desc: 'Custom home structural design, additions, decks, retaining walls, and plan review for local jurisdictions.'
  },
  {
    title: 'Commercial & Industrial Design',
    desc: 'New builds, tenant improvements, and equipment support structures designed for constructability and performance.'
  },
  {
    title: 'Foundation & Steel Design for PEMB',
    desc: 'Foundation design and steel coordination for pre-engineered metal buildings with manufacturer collaboration.'
  },
  {
    title: 'Retrofit / Remodel Design',
    desc: 'Strengthening and modification of existing structures with clear detailing to minimize disruption.'
  },
  {
    title: 'Value Engineering',
    desc: 'Cost-optimized solutions that maintain safety and code compliance while reducing material and labor.'
  },
  {
    title: 'Seismic Design & Retrofit',
    desc: 'Earthquake-resistant design, evaluation, and retrofit strategies for buildings and non-structural components.'
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-black border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Services</h2>
          <p className="text-gray-300 mt-2">Clear, practical engineering for every phase of your project.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-orange-500/30 bg-gradient-to-b from-slate-900 to-black p-6 hover:border-orange-500 transition">
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
