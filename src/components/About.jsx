export default function About() {
  return (
    <section id="about" className="bg-black border-t border-orange-500/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white">About Us</h2>
            <p className="mt-4 text-gray-300">
              We are a structural engineering firm dedicated to delivering efficient, constructible designs and responsive service. Our team partners with architects, builders, and owners to solve problems quickly and keep projects moving.
            </p>
            <p className="mt-3 text-gray-300">
              From concept through construction, we provide clear communication, detailed calculations, and practical drawings that help crews on site.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-xl border border-orange-500/30 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
