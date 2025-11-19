import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ContactForm />
      <footer className="border-t border-orange-500/20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Arcona Structural. All rights reserved.</p>
          <a href="/contact" className="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600 transition">Contact Us</a>
        </div>
      </footer>
    </div>
  )
}

export default App
