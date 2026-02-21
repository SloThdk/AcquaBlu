'use client'
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CF = 'var(--font-cormorant)'

// Only high-res images — pasta.jpg (350×198) and Banana-split.jpg (400×200)
// are too small and look terrible when upscaled. Removed.
const slides = [
  { src: '/images/slider_italiano.jpg', caption: 'Antipasto Italiano'   },
  { src: '/images/21_3.jpg',            caption: 'Pizza Calzone'         },
  { src: '/images/37.jpg',              caption: 'Pizza Parmigiana'      },
  { src: '/images/vinoss.jpg',          caption: 'Vinkort'               },
  { src: '/images/dentro2.jpg',         caption: 'Restauranten indeni'   },
  { src: '/images/terrasa2.jpg',        caption: 'Terrassen'             },
]

export default function PhotoSlideshow() {
  const [current, setCurrent] = useState(0)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => goTo(current + 1), 5000)
    return () => { if (timer.current) clearTimeout(timer.current) }
  }, [current, goTo])

  return (
    <section className="w-full bg-[#0b1c33]">
      {/* 16:9 aspect ratio — works for all photo orientations */}
      <div className="relative w-full aspect-video max-h-[480px] overflow-hidden">

        {/* All slides pre-rendered — fade via opacity only, no remounting */}
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.caption}
              fill
              sizes="100vw"
              priority={i === 0}
              // Both className AND style — belt and suspenders for objectFit
              className="object-cover object-center"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ))}

        {/* Gradient for caption readability */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />

        {/* Caption */}
        <div className="absolute bottom-8 sm:bottom-10 left-5 sm:left-8 z-20">
          <p
            className="text-white text-xl sm:text-2xl font-light uppercase tracking-[0.1em] drop-shadow"
            style={{ fontFamily: CF }}
          >
            {slides[current].caption}
          </p>
        </div>

        {/* Prev — desktop only */}
        <button
          onClick={() => goTo(current - 1)}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center bg-black/30 border border-white/20 text-white hover:bg-black/50 transition-all z-20 cursor-pointer"
          aria-label="Forrige"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>

        {/* Next — desktop only */}
        <button
          onClick={() => goTo(current + 1)}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center bg-black/30 border border-white/20 text-white hover:bg-black/50 transition-all z-20 cursor-pointer"
          aria-label="Næste"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Billede ${i + 1}`}
              className={[
                'rounded-full transition-all duration-300 cursor-pointer',
                i === current ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
