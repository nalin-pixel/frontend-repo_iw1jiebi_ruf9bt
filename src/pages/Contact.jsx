import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      subject: form.get('subject') || undefined,
      message: form.get('message'),
      source: 'contact:page'
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ ok: true, msg: 'Thanks! We\'ll be in touch shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <a href="/" className="text-orange-400 hover:text-orange-300">← Back to Home</a>
        <h1 className="mt-6 text-4xl font-bold text-white">Contact Us</h1>
        <p className="mt-2 text-gray-300">We'd love to learn about your project.</p>

        <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-sm text-gray-300">Name</label>
            <input name="name" required className="mt-1 w-full rounded bg-slate-900 border border-orange-500/30 text-white p-3 outline-none focus:border-orange-500" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-gray-300">Email</label>
            <input name="email" type="email" required className="mt-1 w-full rounded bg-slate-900 border border-orange-500/30 text-white p-3 outline-none focus:border-orange-500" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-gray-300">Phone</label>
            <input name="phone" className="mt-1 w-full rounded bg-slate-900 border border-orange-500/30 text-white p-3 outline-none focus:border-orange-500" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-gray-300">Subject</label>
            <input name="subject" className="mt-1 w-full rounded bg-slate-900 border border-orange-500/30 text-white p-3 outline-none focus:border-orange-500" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-300">Message</label>
            <textarea name="message" required rows="6" className="mt-1 w-full rounded bg-slate-900 border border-orange-500/30 text-white p-3 outline-none focus:border-orange-500" />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button disabled={loading} className="px-6 py-3 rounded bg-orange-500 text-white hover:bg-orange-600 transition disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p className={status.ok ? 'text-green-400' : 'text-red-400'}>{status.msg}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
