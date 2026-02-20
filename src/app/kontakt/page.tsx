import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { restaurant } from '@/lib/data'

const CF = 'var(--font-cormorant)'
const DM = 'var(--font-dm)'

export const metadata: Metadata = {
  title: 'Kontakt & Find os',
  description: 'Find Acqua Blu på Blåvandvej 28L, 6857 Blåvand. Ring 75 27 98 98 — åbent alle ugens dage 11:30–21:00.',
}

export default function Kontakt() {
  return (
    <>
      <div className="bg-ab-cream min-h-screen pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {/* ── Page header ─────────────────────────────────── */}
          <Reveal direction="up" distance={14} duration={700}>
            <div className="text-center mb-16">
              <p className="text-ab-blue text-xs uppercase tracking-[0.35em] mb-3 font-medium" style={{ fontFamily: DM }}>
                Acqua Blu
              </p>
              <h1
                className="text-5xl sm:text-6xl font-light uppercase tracking-[0.06em] text-ab-text mb-5"
                style={{ fontFamily: CF }}
              >
                Kontakt & Find os
              </h1>
              <div className="w-10 h-px bg-ab-blue/40 mx-auto" />
            </div>
          </Reveal>

          {/* ── Contact info + map ──────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">

            <Reveal direction="left" distance={18} duration={700}>
              <div className="bg-white border border-ab-border rounded-2xl p-8 h-full shadow-sm">
                <h2
                  className="text-xl font-light uppercase tracking-widest text-ab-text mb-8"
                  style={{ fontFamily: CF }}
                >
                  Kontakt os
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: Phone, label: 'Telefon', text: restaurant.phone, href: `tel:${restaurant.phone.replace(/\s/g,'')}` },
                    { icon: Mail,  label: 'Email',   text: restaurant.email,  href: `mailto:${restaurant.email}` },
                  ].map(({ icon: Icon, label, text, href }) => (
                    <a key={label} href={href} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl border border-ab-border bg-ab-ivory flex items-center justify-center shrink-0 group-hover:border-ab-blue/50 group-hover:bg-ab-blue/5 transition-all">
                        <Icon size={15} strokeWidth={1.5} className="text-ab-blue" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-ab-muted mb-0.5 font-medium" style={{ fontFamily: DM }}>{label}</p>
                        <p className="text-ab-text text-sm font-medium group-hover:text-ab-blue transition-colors break-all" style={{ fontFamily: DM }}>{text}</p>
                      </div>
                    </a>
                  ))}

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl border border-ab-border bg-ab-ivory flex items-center justify-center shrink-0">
                      <MapPin size={15} strokeWidth={1.5} className="text-ab-blue" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-ab-muted mb-0.5 font-medium" style={{ fontFamily: DM }}>Adresse</p>
                      <p className="text-ab-text text-sm font-medium" style={{ fontFamily: DM }}>{restaurant.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl border border-ab-border bg-ab-ivory flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={15} strokeWidth={1.5} className="text-ab-blue" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-ab-muted mb-1 font-medium" style={{ fontFamily: DM }}>Åbningstider</p>
                      <p className="text-ab-text text-sm font-semibold" style={{ fontFamily: DM }}>Mandag til Søndag</p>
                      <p className="text-ab-muted text-sm mt-0.5" style={{ fontFamily: DM }}>11:30 – 21:00</p>
                    </div>
                  </div>

                  <a href={restaurant.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl border border-ab-border bg-ab-ivory flex items-center justify-center shrink-0 group-hover:border-ab-blue/50 group-hover:bg-ab-blue/5 transition-all">
                      <Facebook size={15} strokeWidth={1.5} className="text-ab-blue" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-ab-muted mb-0.5 font-medium" style={{ fontFamily: DM }}>Facebook</p>
                      <p className="text-ab-text text-sm font-medium group-hover:text-ab-blue transition-colors" style={{ fontFamily: DM }}>Acqua Blu</p>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" distance={18} duration={700} delay={80}>
              <div className="rounded-2xl overflow-hidden border border-ab-border min-h-[360px] h-full shadow-sm">
                <iframe
                  src="https://maps.google.com/maps?q=Blåvandvej+28L,+6857+Blåvand&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ minHeight: 360, border: 0, filter: 'saturate(0.7)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Acqua Blu på kort"
                />
              </div>
            </Reveal>
          </div>

          {/* ── Contact form ────────────────────────────────── */}
          <Reveal direction="up" distance={14} duration={700} delay={100}>
            <div className="bg-white border border-ab-border rounded-2xl p-8 sm:p-10 mb-8 shadow-sm">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.3em] text-ab-muted mb-2 font-medium" style={{ fontFamily: DM }}>
                  Skriv til os
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-light uppercase tracking-wide text-ab-text"
                  style={{ fontFamily: CF }}
                >
                  Send en besked
                </h2>
                <p className="text-ab-muted text-sm mt-2 leading-relaxed" style={{ fontFamily: DM }}>
                  Book bord, spørg om allergier, eller bestil takeaway på forhånd — vi svarer hurtigt.
                </p>
              </div>
              <ContactForm />
            </div>
          </Reveal>

          {/* ── CTA strip ───────────────────────────────────── */}
          <Reveal direction="up" distance={12}>
            <div className="rounded-2xl border border-ab-blue/20 bg-ab-blue/5 p-8 sm:p-10 text-center">
              <p
                className="text-2xl sm:text-3xl font-light text-ab-text uppercase tracking-wide mb-2"
                style={{ fontFamily: CF }}
              >
                Foretrækker du at ringe?
              </p>
              <p className="text-ab-muted text-sm mb-6" style={{ fontFamily: DM }}>
                Vi sidder klar til at hjælpe dig — ring direkte til restauranten.
              </p>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                className="inline-flex items-center gap-2 bg-ab-blue hover:bg-ab-blue2 text-white text-sm font-semibold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
                style={{ fontFamily: DM }}
              >
                <Phone size={15} strokeWidth={1.5} />
                Ring — {restaurant.phone}
              </a>
            </div>
          </Reveal>

        </div>
      </div>
      <Footer />
    </>
  )
}
