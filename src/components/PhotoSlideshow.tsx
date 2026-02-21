'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from 'react'

const CF = 'var(--font-cormorant)'
const DM = 'var(--font-dm)'

const slides = [
  { src: '/images/slider_italiano.jpg', caption: 'Antipasto Italiano' },
  { src: '/images/21_3.jpg',            caption: 'Pizza Calzone'       },
  { src: '/images/37.jpg',              caption: 'Pizza Parmigiana'    },
  { src: '/images/pasta.jpg',           caption: 'Tagliatele al Salmone' },
  { src: '/images/Banana-split.jpg',    caption: 'Banana Split'        },
  { src: '/images/vinoss.jpg',          caption: 'Vinkort'             },
  { src: '/images/dentro2.jpg',         caption: 'Restauranten indeni' },
  { src: '/images/terrasa2.jpg',        caption: 'Terrassen'           },
]

export default function PhotoSlideshow() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((index: number) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(index)
      setFading(false)
    }, 350)
  }, [])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(next, 4000)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [current, next])

  return (
    <section className="slideshow-section">
      <div className="slideshow-inner">
        {/* Image */}
        <div className="slideshow-img-wrap" style={{ opacity: fading ? 0 : 1 }}>
          <Image
            src={slides[current].src}
            alt={slides[current].caption}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Caption */}
          <div className="slideshow-caption">
            <span style={{ fontFamily: CF }}>{slides[current].caption}</span>
          </div>
        </div>

        {/* Prev arrow */}
        <button
          className="slideshow-arrow slideshow-arrow--left"
          onClick={prev}
          aria-label="Forrige billede"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          className="slideshow-arrow slideshow-arrow--right"
          onClick={next}
          aria-label="Næste billede"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="slideshow-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slideshow-dot${i === current ? ' slideshow-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Gå til billede ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .slideshow-section {
          width: 100%;
          background: #0d1f3c;
        }
        .slideshow-inner {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .slideshow-inner {
            height: 260px;
          }
        }
        .slideshow-img-wrap {
          position: absolute;
          inset: 0;
          transition: opacity 0.35s ease;
        }
        .slideshow-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 8px 18px 10px;
          background: rgba(0,0,0,0.52);
          backdrop-filter: blur(2px);
        }
        .slideshow-caption span {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 300;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        @media (max-width: 640px) {
          .slideshow-caption span {
            font-size: 1rem;
          }
        }
        .slideshow-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          z-index: 10;
        }
        .slideshow-arrow:hover {
          background: rgba(255,255,255,0.25);
          border-color: rgba(255,255,255,0.55);
        }
        .slideshow-arrow--left  { left: 18px;  }
        .slideshow-arrow--right { right: 18px; }
        @media (max-width: 640px) {
          .slideshow-arrow {
            display: none;
          }
        }
        .slideshow-dots {
          position: absolute;
          bottom: 14px;
          right: 20px;
          display: flex;
          gap: 7px;
          z-index: 10;
        }
        @media (max-width: 640px) {
          .slideshow-dots {
            bottom: 10px;
            right: 50%;
            transform: translateX(50%);
          }
        }
        .slideshow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          padding: 0;
        }
        .slideshow-dot--active {
          background: #fff;
          transform: scale(1.25);
        }
        .slideshow-dot:hover:not(.slideshow-dot--active) {
          background: rgba(255,255,255,0.65);
        }
      `}</style>
    </section>
  )
}
