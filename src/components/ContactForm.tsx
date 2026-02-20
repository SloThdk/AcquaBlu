'use client'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const DM = 'var(--font-dm)'
const CF = 'var(--font-cormorant)'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connect to backend / email service + reCAPTCHA
    setSent(true)
  }

  const labelClass = 'block text-xs uppercase tracking-[0.18em] text-ab-text/70 mb-1.5 font-medium'

  const inputClass = [
    'w-full bg-ab-ivory border border-ab-border rounded-xl px-4 py-3.5 text-ab-text text-sm font-medium',
    'placeholder:text-ab-muted/50 placeholder:font-normal',
    'focus:outline-none focus:bg-white focus:border-ab-blue/60 focus:ring-2 focus:ring-ab-blue/15',
    'transition-all duration-200',
  ].join(' ')

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-14 text-center">
        <div className="w-16 h-16 rounded-full bg-ab-blue/10 flex items-center justify-center">
          <CheckCircle size={32} strokeWidth={1.5} className="text-ab-blue" />
        </div>
        <div>
          <p className="text-3xl font-light uppercase tracking-widest text-ab-text mb-2" style={{ fontFamily: CF }}>
            Tak for din besked
          </p>
          <p className="text-ab-muted text-sm" style={{ fontFamily: DM }}>
            Vi vender tilbage hurtigst muligt — typisk inden for 24 timer.
          </p>
        </div>
        <button
          onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
          className="mt-1 text-ab-blue text-sm hover:underline font-medium"
          style={{ fontFamily: DM }}
        >
          Send en ny besked →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} style={{ fontFamily: DM }}>Navn *</label>
          <input
            name="name" required value={form.name} onChange={handle}
            placeholder="Dit fulde navn"
            className={inputClass}
            style={{ fontFamily: DM }}
          />
        </div>
        <div>
          <label className={labelClass} style={{ fontFamily: DM }}>Email *</label>
          <input
            type="email" name="email" required value={form.email} onChange={handle}
            placeholder="din@email.dk"
            className={inputClass}
            style={{ fontFamily: DM }}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} style={{ fontFamily: DM }}>Telefon</label>
        <input
          type="tel" name="phone" value={form.phone} onChange={handle}
          placeholder="+45 00 00 00 00"
          className={inputClass}
          style={{ fontFamily: DM }}
        />
      </div>

      <div>
        <label className={labelClass} style={{ fontFamily: DM }}>Besked *</label>
        <textarea
          name="message" required value={form.message} onChange={handle}
          rows={5}
          placeholder="Fortæl os hvad vi kan hjælpe med — ønsket dato, tidspunkt, allergier eller særlige ønsker..."
          className={inputClass + ' resize-none'}
          style={{ fontFamily: DM }}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-ab-blue hover:bg-ab-blue2 text-white text-sm font-semibold py-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
        style={{ fontFamily: DM }}
      >
        <Send size={15} strokeWidth={1.5} />
        Send besked
      </button>

      <p className="text-center text-ab-muted/70 text-xs leading-relaxed" style={{ fontFamily: DM }}>
        Vi svarer typisk inden for 24 timer · reCAPTCHA tilføjes ved lancering
      </p>
    </form>
  )
}
