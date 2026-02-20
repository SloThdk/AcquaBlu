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
        'transition-opacity duration-300',
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        'fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40',
        'w-11 h-11 rounded-full cursor-pointer',
        // Dark charcoal — visible on white pages AND the navy footer
        'bg-[#1e2535] hover:bg-[#2d3650] text-white',
        'shadow-lg hover:shadow-xl',
        'flex items-center justify-center',
      ].join(' ')}
    >
      <ChevronUp size={18} strokeWidth={2.5} />
    </button>
  )
}
