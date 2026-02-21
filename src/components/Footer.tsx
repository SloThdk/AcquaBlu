import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react'
import { restaurant } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-ab-blue text-white/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <p className="text-xl font-semibold text-white tracking-wide mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Acqua Blu
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-4">Pizzeria Ristorante · Blåvand</p>
          <p className="text-sm text-white/60 leading-relaxed max-w-[200px]">
            Ægte siciliansk køkken på Vestkysten siden åbningen.
          </p>
          <a href={restaurant.facebook} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-white/60 hover:text-white transition-colors text-sm"
            style={{ fontFamily: 'var(--font-dm)' }}>
            <Facebook size={14} strokeWidth={1.5} />
            Facebook
          </a>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">Navigation</p>
          <div className="flex flex-col gap-2.5">
            {[['/', 'Forside'], ['/menu', 'Menukort'], ['/kontakt', 'Kontakt']].map(([href, label]) => (
              <Link key={href} href={href} className="text-sm text-white/60 hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">Kontakt</p>
          <div className="flex flex-col gap-3">
            {[
              { icon: Phone, text: restaurant.phone, href: `tel:${restaurant.phone.replace(/\s/g,'')}` },
              { icon: Mail,  text: restaurant.email,  href: `mailto:${restaurant.email}` },
            ].map(({ icon: Icon, text, href }) => (
              <a key={href} href={href} className="flex items-start gap-2 text-sm text-white/60 hover:text-white transition-colors break-all">
                <Icon size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                {text}
              </a>
            ))}
            <p className="flex items-start gap-2 text-sm text-white/60">
              <MapPin size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" />
              {restaurant.address}
            </p>
            <p className="flex items-center gap-2 text-sm text-white/60">
              <Clock size={13} strokeWidth={1.5} />
              {restaurant.hours}
            </p>

            {/* Kontrol rapport badge */}
            <div className="mt-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-2">Fødevarekontrol</p>
              <a
                href="https://www.findsmiley.dk/806123"
                target="_blank"
                rel="noopener noreferrer"
                title="Se kontrol rapport"
              >
                <Image
                  src="/images/kontrol.gif"
                  alt="Se kontrol rapport"
                  width={120}
                  height={60}
                  style={{ imageRendering: 'auto' }}
                  unoptimized
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-xs text-white/30">© {new Date().getFullYear()} Pizzeria Ristorante Acqua Blu · Blåvand</p>
      </div>
    </footer>
  )
}
