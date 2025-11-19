import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((o) => !o)

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-orange-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-orange-500 flex items-center justify-center text-white font-black">A</div>
            <div>
              <p className="text-white font-semibold leading-tight">Arcona Structural</p>
              <p className="text-xs text-orange-400/80">Structural Engineering</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-200 hover:text-white transition">Services</a>
            <a href="#about" className="text-gray-200 hover:text-white transition">About</a>
            <a href="#contact" className="text-gray-200 hover:text-white transition">Contact</a>
            <a href="/contact" className="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600 transition">Contact Us</a>
          </nav>

          <button onClick={toggle} className="md:hidden text-white p-2"><Menu /></button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#services" onClick={() => setOpen(false)} className="block text-gray-200">Services</a>
            <a href="#about" onClick={() => setOpen(false)} className="block text-gray-200">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-gray-200">Contact</a>
            <a href="/contact" onClick={() => setOpen(false)} className="block px-4 py-2 rounded bg-orange-500 text-white w-max">Contact Us</a>
          </div>
        )}
      </div>
    </header>
  )
}
