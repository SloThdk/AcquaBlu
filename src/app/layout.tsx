import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'], weight: ['300','400','500','600','700'],
  variable: '--font-cormorant', display: 'swap',
})
const dmSans = DM_Sans({
  subsets: ['latin'], weight: ['300','400','500'],
  variable: '--font-dm', display: 'swap',
})

const BASE = 'https://acquablu-demo.pages.dev'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: { default: 'Acqua Blu — Pizzeria Ristorante i Blåvand', template: '%s | Acqua Blu' },
  description: 'Ægte siciliansk pizzeria i Blåvand. Alle retter lavet fra bunden af Salvatore og Rino Lalicata. Ring 75 27 98 98.',
  keywords: ['pizzeria Blåvand', 'Acqua Blu', 'italiensk restaurant Blåvand', 'pizza Blåvand'],
  openGraph: {
    type: 'website', locale: 'da_DK', url: BASE, siteName: 'Acqua Blu',
    title: 'Acqua Blu — Pizzeria Ristorante i Blåvand',
    description: 'Ægte siciliansk pizzeria i Blåvand. Alt lavet fra bunden.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Acqua Blu — Blåvand' }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" data-scroll-behavior="smooth" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-ab-cream text-ab-text antialiased" style={{ fontFamily: 'var(--font-dm)' }}>
        <Navigation />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
