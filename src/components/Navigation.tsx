'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { restaurant } from '@/lib/data'

const links = [
  { href: '/',        label: 'Forside'  },
  { href: '/menu',    label: 'Menukort' },
  { href: '/kontakt', label: 'Kontakt'  },
]

export default function Navigation() {
  const [open, setOpen]     = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY               = useRef(0)

  // Auto-hide when scrolling DOWN, reveal when scrolling UP
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY.current && y > 160)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ── Nav bar — one consistent style everywhere ─────── */}
      <nav className={[
        'fixed top-0 left-0 right-0 z-50',
        'bg-white/96 backdrop-blur-md border-b border-ab-border/70 shadow-sm',
        'transition-transform duration-300',
        hidden && !open ? '-translate-y-full' : 'translate-y-0',
      ].join(' ')}>

        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-[68px] sm:h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0">
            <Image
              src="/images/logo.jpg"
              alt="Acqua Blu logo"
              width={46}
              height={46}
              style={{ width: '46px', height: '46px' }}
              className="rounded-full object-cover shrink-0 ring-1 ring-ab-border"
            />
            <div className="flex flex-col leading-none gap-0.5 min-w-0">
              <span
                className="text-lg sm:text-xl font-semibold tracking-wide leading-none text-ab-blue group-hover:text-ab-blue2 transition-colors truncate"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Acqua Blu
              </span>
              <span
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-ab-muted"
                style={{ fontFamily: 'var(--font-dm)' }}
              >
                Pizzeria Ristorante
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} prefetch={false}
                className="text-sm font-medium tracking-wide text-ab-muted hover:text-ab-blue transition-colors"
                style={{ fontFamily: 'var(--font-dm)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 text-sm text-ab-muted hover:text-ab-blue transition-colors"
              style={{ fontFamily: 'var(--font-dm)' }}
            >
              <Phone size={13} strokeWidth={1.5} />
              {restaurant.phone}
            </a>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
              className="bg-ab-blue hover:bg-ab-blue2 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm whitespace-nowrap"
              style={{ fontFamily: 'var(--font-dm)' }}
            >
              Bestil bord
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-ab-blue hover:bg-ab-blue/8 transition-colors shrink-0 rounded-md"
            onClick={() => setOpen(true)}
            aria-label="Åbn menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ───────────────────────── */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col md:hidden bg-[#0b1c33]">

          {/* Close button */}
          <div className="flex items-center justify-end px-4 sm:px-8 h-[68px] sm:h-[72px] shrink-0">
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Luk menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <div className="mx-4 sm:mx-8 h-px bg-white/10 shrink-0" />

          {/* Links */}
          <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center py-8 px-6">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                prefetch={false}
                onClick={() => setOpen(false)}
                className="w-full max-w-xs text-center py-5 text-[2.2rem] sm:text-4xl font-light text-white uppercase tracking-[0.1em] hover:text-white/70 transition-colors border-b border-white/10 last:border-0"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-4 sm:px-8 pb-10 pt-4 shrink-0 flex flex-col items-center gap-3">
            <div className="w-8 h-px bg-white/20 mb-1" />
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
              onClick={() => setOpen(false)}
              className="w-full max-w-xs flex items-center justify-center gap-2 bg-white text-ab-blue font-semibold text-sm px-8 py-4 rounded-xl hover:bg-ab-ivory transition-colors shadow-lg"
              style={{ fontFamily: 'var(--font-dm)' }}
            >
              <Phone size={15} strokeWidth={1.5} />
              Ring — {restaurant.phone}
            </a>
            <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-dm)' }}>
              Pizzeria Ristorante · Blåvand
            </p>
          </div>

        </div>
      )}
    </>
  )
}
