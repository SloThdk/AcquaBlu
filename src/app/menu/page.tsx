import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { pizzas, koed, restaurant } from '@/lib/data'

const CF = 'var(--font-cormorant)'
const DM = 'var(--font-dm)'

export const metadata: Metadata = {
  title: 'Menukort',
  description: 'Se Acqua Blus fulde menukort — 33 pizzaer, grillretter, kødspecialiteter. Bestil på 75 27 98 98.',
}

function Item({ nr, name, desc, price, delay }: { nr: number; name: string; desc: string; price: string; delay?: number }) {
  return (
    <Reveal direction="up" distance={10} delay={delay ?? 0} duration={450}>
      <div className="group flex items-start justify-between gap-3 bg-white border border-ab-border rounded-xl px-4 py-4 hover:border-ab-blue/30 hover:-translate-y-0.5 transition-all duration-300">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-ab-muted/50 text-[10px] tabular-nums shrink-0" style={{ fontFamily: DM }}>Nr.{nr}</span>
            <p className="text-ab-text text-sm font-medium leading-snug group-hover:text-ab-blue transition-colors" style={{ fontFamily: DM }}>{name}</p>
          </div>
          <p className="text-ab-muted text-xs mt-1 leading-relaxed" style={{ fontFamily: DM }}>{desc}</p>
        </div>
        <span className="text-ab-blue font-semibold text-sm shrink-0 tabular-nums" style={{ fontFamily: DM }}>{price},-</span>
      </div>
    </Reveal>
  )
}

export default function Menu() {
  return (
    <>
      <div className="bg-ab-cream min-h-screen pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {/* Header */}
          <Reveal direction="up" distance={14} duration={700}>
            <div className="text-center mb-16">
              <p className="text-ab-blue text-[10px] uppercase tracking-[0.35em] mb-3" style={{ fontFamily: DM }}>Acqua Blu</p>
              <h1 className="text-5xl sm:text-7xl font-light uppercase tracking-[0.06em] text-ab-text mb-4" style={{ fontFamily: CF }}>Menukort</h1>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-10 bg-ab-blue/30" />
                <p className="text-ab-muted text-xs uppercase tracking-[0.25em]" style={{ fontFamily: DM }}>Alle retter lavet fra bunden</p>
                <div className="h-px w-10 bg-ab-blue/30" />
              </div>
              <p className="text-ab-muted text-sm" style={{ fontFamily: DM }}>
                Åbent mandag til søndag · 11:30–21:00
              </p>
            </div>
          </Reveal>

          {/* Pizze */}
          <div className="mb-14">
            <Reveal direction="up" distance={10} duration={600}>
              <div className="flex items-center gap-5 mb-8">
                <div className="h-px flex-1 bg-ab-border" />
                <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.15em] text-ab-blue whitespace-nowrap" style={{ fontFamily: CF }}>
                  Le Pizze
                </h2>
                <div className="h-px flex-1 bg-ab-border" />
              </div>
              <p className="text-center text-ab-muted text-xs italic -mt-4 mb-7" style={{ fontFamily: DM }}>
                Alle pizzaer kan fås med hvidløg og chili uden ekstra betaling — bare sig til. Pr. ekstra ingrediens 19,-
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {pizzas.map((p, i) => <Item key={p.nr} {...p} delay={i * 30} />)}
            </div>
          </div>

          {/* Kød */}
          <div className="mb-14">
            <Reveal direction="up" distance={10} duration={600}>
              <div className="flex items-center gap-5 mb-8">
                <div className="h-px flex-1 bg-ab-border" />
                <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.15em] text-ab-blue whitespace-nowrap" style={{ fontFamily: CF }}>
                  Specialiteter
                </h2>
                <div className="h-px flex-1 bg-ab-border" />
              </div>
              <p className="text-center text-ab-muted text-xs italic -mt-4 mb-7" style={{ fontFamily: DM }}>
                Alle specialiteter, fiske- og kødretter serveres med dagens tilbehør
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {koed.map((k, i) => <Item key={k.nr} {...k} delay={i * 30} />)}
            </div>
          </div>

          {/* Pizza photo */}
          <Reveal direction="up" distance={12} duration={700}>
            <div className="relative rounded-xl overflow-hidden h-48 sm:h-64 my-10 shadow-lg shadow-ab-blue/10">
              <Image src="/images/pizza.jpg" alt="Pizza Parmigiana" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-ab-blue/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-2xl sm:text-4xl font-light uppercase tracking-widest" style={{ fontFamily: CF }}>
                  Buon Appetito
                </p>
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal direction="up" distance={12}>
            <div className="rounded-xl border border-ab-border bg-white p-8 sm:p-10 text-center shadow-sm">
              <p className="text-2xl sm:text-3xl font-light text-ab-text uppercase tracking-wide mb-2" style={{ fontFamily: CF }}>
                Reservationer & Takeaway
              </p>
              <p className="text-ab-muted text-sm mb-6" style={{ fontFamily: DM }}>
                Ring til os — vi hjælper gerne.
              </p>
              <a href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                className="inline-flex items-center gap-2 bg-ab-blue hover:bg-ab-blue2 text-white text-sm font-medium px-8 py-4 rounded-lg transition-all"
                style={{ fontFamily: DM }}>
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
