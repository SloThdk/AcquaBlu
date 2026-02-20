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
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden]     = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      setScrolled(y > 50)
      if (y > lastY.current && y > 80) setHidden(true)
      else setHidden(false)
      lastY.current = y
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        hidden && !open ? '-translate-y-full' : 'translate-y-0',
        scrolled ? 'bg-ab-cream/96 backdrop-blur-md border-b border-ab-border shadow-sm' : 'bg-transparent',
      ].join(' ')}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/images/logo.jpg" alt="Acqua Blu logo" width={38} height={38} className="rounded-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col leading-none">
              <span className="text-base font-semibold tracking-wide text-ab-blue group-hover:text-ab-blue2 transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Acqua Blu
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-ab-muted" style={{ fontFamily: 'var(--font-dm)' }}>
                Pizzeria Ristorante
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className="text-sm tracking-wide text-ab-muted hover:text-ab-blue transition-colors"
                style={{ fontFamily: 'var(--font-dm)' }}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="flex items-center gap-1.5 text-ab-muted hover:text-ab-blue transition-colors text-sm"
              style={{ fontFamily: 'var(--font-dm)' }}>
              <Phone size={13} strokeWidth={1.5} />
              {restaurant.phone}
            </a>
            <a href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="bg-ab-blue hover:bg-ab-blue2 text-white text-sm px-5 py-2 rounded-lg transition-colors"
              style={{ fontFamily: 'var(--font-dm)' }}>
              Bestil bord
            </a>
          </div>

          <button className="md:hidden text-ab-blue p-1" onClick={() => setOpen(!open)}>
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-ab-cream/98 backdrop-blur-md">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-4xl font-light text-ab-blue hover:text-ab-red transition-colors uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-cormorant)' }}>
              {l.label}
            </Link>
          ))}
          <a href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
            className="mt-4 flex items-center gap-2 bg-ab-blue text-white px-8 py-3.5 rounded-xl text-base"
            style={{ fontFamily: 'var(--font-dm)' }}>
            <Phone size={16} strokeWidth={1.5} />
            {restaurant.phone}
          </a>
        </div>
      )}
    </>
  )
}
