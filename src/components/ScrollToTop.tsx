'use client'
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Tilbage til toppen"
      className={[
        // Opacity-only transition — no translate, no bounce, no movement
        'transition-opacity duration-300',
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        // Position & style
        'fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40',
        'w-10 h-10 rounded-full cursor-pointer',
        'bg-white hover:bg-ab-ivory border border-ab-border hover:border-ab-blue/30',
        'text-ab-blue shadow-md hover:shadow-lg',
        'flex items-center justify-center',
      ].join(' ')}
    >
      <ChevronUp size={18} strokeWidth={2} />
    </button>
  )
}
