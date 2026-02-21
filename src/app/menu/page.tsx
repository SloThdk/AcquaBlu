import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import ItalianFlag from '@/components/ItalianFlag'
import { pizzas, koed, restaurant } from '@/lib/data'

const CF = 'var(--font-cormorant)'
const DM = 'var(--font-dm)'

export const metadata: Metadata = {
  title: 'Menukort',
  description: 'Se Acqua Blus fulde menukort — 33 pizzaer, grillretter, kødspecialiteter. Bestil på 75 27 98 98.',
}

function Item({ nr, name, desc, price, delay }: { nr: number; name: string; desc: string; price: string; delay?: number }) {
  return (
    <Reveal direction="up" distance={8} delay={delay ?? 0} duration={400}>
      <div className="group flex items-start justify-between gap-4 bg-white border border-ab-border rounded-xl px-5 py-5 hover:border-ab-blue/40 hover:shadow-md transition-all duration-250">

        <div className="min-w-0 flex-1">
          {/* Number badge + name on same row */}
          <div className="flex items-center gap-2.5 mb-2">
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-ab-blue/10 text-ab-blue text-xs font-bold tabular-nums shrink-0"
              style={{ fontFamily: DM }}
            >
              {nr}
            </span>
            <p
              className="text-ab-text text-[15px] font-semibold leading-snug group-hover:text-ab-blue transition-colors"
              style={{ fontFamily: DM }}
            >
              {name}
            </p>
          </div>

          {/* Description indented under the name */}
          {desc && (
            <p
              className="text-ab-muted text-[13px] leading-relaxed pl-[38px]"
              style={{ fontFamily: DM }}
            >
              {desc}
            </p>
          )}
        </div>

        {/* Price — right-aligned, prominent */}
        <span
          className="text-ab-blue font-bold text-base shrink-0 tabular-nums pt-0.5"
          style={{ fontFamily: DM }}
        >
          {price},-
        </span>
      </div>
    </Reveal>
  )
}

function SectionHeader({ title, note }: { title: string; note?: string }) {
  return (
    <Reveal direction="up" distance={10} duration={600}>
      <div className="mb-8">
        <div className="flex items-center gap-5 mb-3">
          <div className="h-px flex-1 bg-ab-border" />
          <h2
            className="text-2xl sm:text-3xl font-light uppercase tracking-[0.15em] text-ab-blue whitespace-nowrap flex items-center gap-3"
            style={{ fontFamily: CF }}
          >
            <ItalianFlag width={26} height={17} />
            {title}
          </h2>
          <div className="h-px flex-1 bg-ab-border" />
        </div>
        {note && (
          <p
            className="text-center text-ab-muted text-xs italic"
            style={{ fontFamily: DM }}
          >
            {note}
          </p>
        )}
      </div>
    </Reveal>
  )
}

export default function Menu() {
  return (
    <>
      <div className="bg-ab-cream min-h-screen pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {/* ── Page header ────────────────────────────────── */}
          <Reveal direction="up" distance={14} duration={700}>
            <div className="text-center mb-16">
              <p className="text-ab-blue text-xs uppercase tracking-[0.35em] mb-3 font-medium" style={{ fontFamily: DM }}>
                Acqua Blu
              </p>
              <h1
                className="text-5xl sm:text-7xl font-light uppercase tracking-[0.06em] text-ab-text mb-4"
                style={{ fontFamily: CF }}
              >
                Menukort
              </h1>
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="h-px w-10 bg-ab-blue/30" />
                <p className="text-ab-muted text-xs uppercase tracking-[0.25em] flex items-center gap-2" style={{ fontFamily: DM }}>
                  Alle retter lavet fra bunden <ItalianFlag width={22} height={14} />
                </p>
                <div className="h-px w-10 bg-ab-blue/30" />
              </div>
              <p className="text-ab-muted text-sm" style={{ fontFamily: DM }}>
                Åbent mandag til søndag · 11:30 – 21:00
              </p>
            </div>
          </Reveal>

          {/* ── Pizze ──────────────────────────────────────── */}
          <div className="mb-16">
            <SectionHeader
              title="Le Pizze"
              note="Alle pizzaer kan fås med hvidløg og chili uden ekstra betaling — bare sig til · Ekstra ingrediens 19,-"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {pizzas.map((p, i) => <Item key={p.nr} {...p} delay={i * 25} />)}
            </div>
          </div>

          {/* ── Divider photo ──────────────────────────────── */}
          <Reveal direction="up" distance={12} duration={700}>
            <div className="relative rounded-2xl overflow-hidden h-52 sm:h-72 mb-16 shadow-lg shadow-ab-blue/10">
              <Image src="/images/pizza.jpg" alt="Pizza Parmigiana" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-ab-blue/75 via-ab-blue/40 to-transparent" />
              <div className="absolute left-8 sm:left-12 top-1/2 -translate-y-1/2">
                <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] mb-1" style={{ fontFamily: DM }}>
                  Siciliansk håndværk
                </p>
                <p className="text-white text-3xl sm:text-5xl font-light uppercase tracking-wide leading-tight" style={{ fontFamily: CF }}>
                  Buon<br />Appetito
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── Kød & Specialiteter ────────────────────────── */}
          <div className="mb-16">
            <SectionHeader
              title="Specialiteter"
              note="Alle specialiteter, fiske- og kødretter serveres med dagens tilbehør"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {koed.map((k, i) => <Item key={k.nr} {...k} delay={i * 25} />)}
            </div>
          </div>

          {/* ── CTA ────────────────────────────────────────── */}
          <Reveal direction="up" distance={12}>
            <div className="rounded-2xl border border-ab-blue/20 bg-ab-blue/5 p-8 sm:p-10 text-center">
              <p
                className="text-2xl sm:text-3xl font-light text-ab-text uppercase tracking-wide mb-2"
                style={{ fontFamily: CF }}
              >
                Reservationer & Takeaway
              </p>
              <p className="text-ab-muted text-sm mb-6" style={{ fontFamily: DM }}>
                Ring til os — vi hjælper gerne.
              </p>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
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
