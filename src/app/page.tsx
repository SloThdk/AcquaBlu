import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Clock, ChevronRight, Flame, Leaf, Award } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { restaurant, pizzas, koed } from '@/lib/data'

const CF = 'var(--font-cormorant)'
const DM = 'var(--font-dm)'

const featured = [
  pizzas.find(p => p.nr === 35)!,  // Pizza Acqua Blu — signature
  pizzas.find(p => p.nr === 37)!,  // Pizza Parmigiana
  pizzas.find(p => p.nr === 21)!,  // Calzone
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image src="/images/hero.jpg" alt="Acqua Blu — autentisk italiensk mad" fill priority className="object-cover object-center hero-img" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-ab-blue/80" />

        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto hero-text">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.45em] text-white/90 mb-6" style={{ fontFamily: DM }}>
            Blåvandvej 28L · Blåvand
          </p>
          <h1 className="font-light leading-none tracking-[0.05em] uppercase text-white mb-4" style={{ fontFamily: CF }}>
            <span className="block text-[clamp(2.2rem,9vw,5.5rem)]">Pizzeria</span>
            <span className="block text-[clamp(3rem,13vw,7.5rem)] -mt-1">Acqua Blu</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-white/60" />
            <p className="text-xs uppercase tracking-[0.3em] text-white/80" style={{ fontFamily: DM }}>Siciliansk køkken · Blåvand</p>
            <div className="h-px w-10 bg-white/60" />
          </div>
          <p className="text-white/90 text-sm sm:text-base mb-10 leading-relaxed max-w-sm mx-auto" style={{ fontFamily: DM }}>
            Ægte italiensk mad lavet fra bunden — af to sicilianske brødre
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/menu" prefetch={false} className="inline-flex items-center justify-center gap-2 bg-white text-ab-blue hover:bg-ab-ivory text-sm font-medium px-7 py-3.5 rounded-lg transition-all" style={{ fontFamily: DM }}>
              Se menukort <ChevronRight size={15} strokeWidth={1.5} />
            </Link>
            <a href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/50 hover:bg-white/25 hover:border-white/80 text-white text-sm px-7 py-3.5 rounded-lg transition-all"
              style={{ fontFamily: DM }}>
              <Phone size={14} strokeWidth={1.5} />
              {restaurant.phone}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-10 bg-white/30 animate-pulse" />
      </section>

      {/* ─── FEATURES STRIP ─────────────────────────────────── */}
      <section className="bg-ab-blue border-b border-white/10">
        <div className="max-w-6xl mx-auto px-2 sm:px-8">
          <div className="grid grid-cols-3">
            {[
              { icon: Award,  label: 'Ægte Siciliansk', sub: 'To brødre fra Sicilien'  },
              { icon: Flame,  label: 'Fra Bunden',      sub: 'Alle retter håndlavede'  },
              { icon: Leaf,   label: 'Åbent Dagligt',   sub: '11:30 til 21:00'         },
            ].map(({ icon: Icon, label, sub }, i) => (
              <div key={label} className={['flex flex-col items-center text-center gap-1 py-5 sm:py-6 px-2 sm:px-3', i < 2 ? 'border-r border-white/10' : ''].join(' ')}>
                <Icon size={15} strokeWidth={1.5} className="text-white/70 mb-0.5 sm:size-[18px]" />
                <p className="text-white text-[11px] sm:text-sm font-medium leading-snug" style={{ fontFamily: DM }}>{label}</p>
                <p className="text-white/70 text-[10px] sm:text-xs leading-snug hidden xs:block" style={{ fontFamily: DM }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORY ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-ab-cream">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

            <Reveal direction="left" distance={20} duration={700}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl shadow-ab-blue/10">
                <Image src="/images/exterior.jpg" alt="Acqua Blu — Blåvand" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ab-blue/40 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white text-lg font-light uppercase tracking-widest" style={{ fontFamily: CF }}>Blåvand</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: DM }}>siden åbningen</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" distance={20} duration={700} delay={80}>
              <div>
                <p className="text-ab-blue text-[10px] uppercase tracking-[0.3em] mb-4" style={{ fontFamily: DM }}>Vores historie</p>
                <h2 className="text-4xl sm:text-5xl font-light text-ab-text leading-tight mb-5 uppercase tracking-wide" style={{ fontFamily: CF }}>
                  To brødre<br />fra Sicilien
                </h2>
                <p className="text-ab-muted leading-relaxed mb-3 text-[15px]" style={{ fontFamily: DM }}>
                  {restaurant.story}
                </p>
                <p className="text-ab-muted text-sm italic mb-8" style={{ fontFamily: DM }}>
                  — {restaurant.owners}
                </p>
                <div className="flex items-center gap-3 p-4 bg-ab-card rounded-xl border border-ab-border">
                  <Clock size={16} strokeWidth={1.5} className="text-ab-blue shrink-0" />
                  <div>
                    <p className="text-ab-text text-sm font-medium" style={{ fontFamily: DM }}>Åbningstider</p>
                    <p className="text-ab-muted text-xs" style={{ fontFamily: DM }}>{restaurant.hours}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PIZZAS ────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-ab-ivory">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal direction="up" distance={12}>
            <div className="text-center mb-12">
              <p className="text-ab-blue text-[10px] uppercase tracking-[0.3em] mb-3" style={{ fontFamily: DM }}>Husets favoritter</p>
              <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-widest text-ab-text" style={{ fontFamily: CF }}>
                Vores Pizze
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {featured.map((p, i) => (
              <Reveal key={p.nr} direction="up" distance={14} delay={i * 90} duration={550}>
                <div className="bg-white rounded-xl border border-ab-border p-5 hover:border-ab-blue/30 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="text-ab-text font-medium text-sm group-hover:text-ab-blue transition-colors" style={{ fontFamily: DM }}>
                      {p.name}
                    </p>
                    <span className="text-xs text-ab-muted/60 shrink-0 tabular-nums" style={{ fontFamily: DM }}>Nr. {p.nr}</span>
                  </div>
                  <p className="text-ab-muted text-xs leading-relaxed mb-4" style={{ fontFamily: DM }}>{p.desc}</p>
                  <p className="text-ab-blue font-semibold text-base" style={{ fontFamily: DM }}>{p.price},-</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" distance={10} delay={300}>
            <div className="text-center">
              <Link href="/menu" className="inline-flex items-center gap-2 border border-ab-border hover:border-ab-blue/50 text-ab-muted hover:text-ab-blue text-sm px-6 py-3 rounded-lg transition-all" style={{ fontFamily: DM }}>
                Se alle {pizzas.length} pizzaer <ChevronRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CALZONE PHOTO BANNER ───────────────────────────── */}
      <section className="bg-ab-cream py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal direction="up" distance={14} duration={700}>
            <div className="relative rounded-xl overflow-hidden h-56 sm:h-80 shadow-lg shadow-ab-blue/10">
              <Image src="/images/calzone.jpg" alt="Pizza Calzone — Acqua Blu" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-ab-blue/70 via-ab-blue/30 to-transparent" />
              <div className="absolute left-7 sm:left-12 top-1/2 -translate-y-1/2">
                <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] mb-2" style={{ fontFamily: DM }}>Specialitet</p>
                <p className="text-white text-3xl sm:text-5xl font-light uppercase tracking-wide leading-tight" style={{ fontFamily: CF }}>
                  Pizza<br />Calzone
                </p>
                <p className="text-white/70 text-sm mt-2" style={{ fontFamily: DM }}>Nr. 21 · 92,-</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-ab-blue">
        <div className="max-w-xl mx-auto px-5 text-center">
          <Reveal direction="up" distance={12}>
            <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] mb-4" style={{ fontFamily: DM }}>Buon Appetito</p>
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-5 uppercase tracking-wide" style={{ fontFamily: CF }}>
              Vi glæder os til at se jer
            </h2>
            <p className="text-white/60 text-sm mb-10 leading-relaxed" style={{ fontFamily: DM }}>
              Ring og bestil bord, eller kig bare forbi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-ab-ivory text-ab-blue text-sm font-medium px-8 py-4 rounded-lg transition-all"
                style={{ fontFamily: DM }}>
                <Phone size={15} strokeWidth={1.5} />
                Ring — {restaurant.phone}
              </a>
              <Link href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white text-sm px-8 py-4 rounded-lg transition-all"
                style={{ fontFamily: DM }}>
                <MapPin size={14} strokeWidth={1.5} />
                Find os
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
