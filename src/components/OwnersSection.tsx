import Image from 'next/image'
import ItalianFlag from './ItalianFlag'

const CF = 'var(--font-cormorant)'
const SC = 'var(--font-script)'   // Great Vibes — matches their handwriting
const DM = 'var(--font-dm)'

export default function OwnersSection() {
  return (
    <section className="bg-ab-ivory border-y border-ab-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Photo ─────────────────────────────────────── */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <Image
                src="/images/owners.jpg"
                alt="Salvatore og Rino Lalicata — ejerne af Acqua Blu"
                width={340}
                height={260}
                className="rounded-2xl object-cover shadow-lg"
                style={{ width: '340px', height: '260px', objectFit: 'cover', objectPosition: 'center top' }}
              />
              {/* Italian flag corner accent */}
              <div className="absolute -top-3 -right-3">
                <ItalianFlag width={40} height={26} />
              </div>
            </div>
          </div>

          {/* ── Text ──────────────────────────────────────── */}
          <div className="flex flex-col gap-5">
            <p
              className="text-xs uppercase tracking-[0.3em] text-ab-blue font-medium"
              style={{ fontFamily: DM }}
            >
              Mød ejerne
            </p>

            <h2
              className="text-3xl sm:text-4xl font-light uppercase tracking-wide text-ab-text leading-tight"
              style={{ fontFamily: CF }}
            >
              To brødre<br />fra Sicilien
            </h2>

            <p
              className="text-ab-muted text-sm leading-relaxed"
              style={{ fontFamily: DM }}
            >
              Restauranten drives af to sicilianske brødre, og Acqua Blu er en af de
              få ægte italienske restauranter på Vestkysten — hvilket vi er stolte af.
              Alle vores retter bliver tilberedt helt fra bunden.
            </p>

            {/* Signature — Great Vibes matches their actual handwriting */}
            <div className="pt-3 border-t border-ab-border/60">
              <p
                className="text-ab-text leading-snug"
                style={{ fontFamily: SC, fontSize: '1.9rem', lineHeight: '1.3' }}
              >
                Buon Appetito
              </p>
              <p
                className="text-ab-muted"
                style={{ fontFamily: SC, fontSize: '1.6rem', lineHeight: '1.3' }}
              >
                Salvatore e Rino Lalicata
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
