'use client'
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CF = 'var(--font-cormorant)'

const slides = [
  { src: '/images/slider_italiano.jpg', caption: 'Antipasto Italiano'    },
  { src: '/images/21_3.jpg',            caption: 'Pizza Calzone'          },
  { src: '/images/37.jpg',              caption: 'Pizza Parmigiana'       },
  { src: '/images/pasta.jpg',           caption: 'Tagliatele al Salmone'  },
  { src: '/images/Banana-split.jpg',    caption: 'Banana Split'           },
  { src: '/images/vinoss.jpg',          caption: 'Vinkort'                },
  { src: '/images/dentro2.jpg',         caption: 'Restauranten indeni'    },
  { src: '/images/terrasa2.jpg',        caption: 'Terrassen'              },
]

export default function PhotoSlideshow() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade]       = useState(true)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((idx: number) => {
    setFade(false)
    setTimeout(() => {
      setCurrent((idx + slides.length) % slides.length)
      setFade(true)
    }, 300)
  }, [])

  // Reset auto-advance whenever slide changes
  useEffect(() => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => goTo(current + 1), 4500)
    return () => { if (timer.current) clearTimeout(timer.current) }
  }, [current, goTo])

  return (
    <section className="w-full bg-[#0b1c33]">
      {/* Fixed-height container — overflow hidden keeps images crisp */}
      <div className="relative w-full h-[280px] sm:h-[420px] overflow-hidden">

        {/* Image — style prop ensures objectFit applies to the actual <img> */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: fade ? 1 : 0 }}
        >
          <Image
            key={current}
            src={slides[current].src}
            alt={slides[current].caption}
            fill
            sizes="100vw"
            priority={current === 0}
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
        </div>

        {/* Subtle dark gradient at bottom for caption readability */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />

        {/* Caption */}
        <div className="absolute bottom-10 left-5 sm:bottom-12 sm:left-8">
          <p
            className="text-white text-xl sm:text-2xl font-light uppercase tracking-[0.1em]"
            style={{ fontFamily: CF }}
          >
            {slides[current].caption}
          </p>
        </div>

        {/* Prev arrow — desktop only */}
        <button
          onClick={() => goTo(current - 1)}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center bg-white/15 border border-white/25 text-white hover:bg-white/30 transition-all z-10"
          aria-label="Forrige"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>

        {/* Next arrow — desktop only */}
        <button
          onClick={() => goTo(current + 1)}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center bg-white/15 border border-white/25 text-white hover:bg-white/30 transition-all z-10"
          aria-label="Næste"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Billede ${i + 1}`}
              className={[
                'rounded-full transition-all duration-200',
                i === current
                  ? 'w-5 h-1.5 bg-white'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70',
              ].join(' ')}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
