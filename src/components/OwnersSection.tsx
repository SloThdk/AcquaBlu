import Image from 'next/image'
import ItalianFlag from '@/components/ItalianFlag'

const CF = 'var(--font-cormorant)'
const DM = 'var(--font-dm)'

export default function OwnersSection() {
  return (
    <section
      style={{
        background: 'var(--color-ab-cream, #f8f4ee)',
        padding: '64px 20px',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
        }}
      >
        {/* Flag accent */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ItalianFlag width={48} height={30} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 48,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* Photo crop */}
          <div
            style={{
              width: 320,
              height: 200,
              overflow: 'hidden',
              borderRadius: 12,
              boxShadow: '0 8px 32px rgba(13,31,60,0.18)',
              flexShrink: 0,
              position: 'relative',
            }}
          >
            <Image
              src="/images/menukort-1.jpg"
              alt="Salvatore og Rino Lalicata"
              width={320}
              height={200}
              style={{
                objectFit: 'cover',
                objectPosition: '5% 92%',
                width: '100%',
                height: '100%',
              }}
            />
          </div>

          {/* Text */}
          <div style={{ maxWidth: 480 }}>
            <p
              style={{
                fontFamily: DM,
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.28em',
                color: 'var(--color-ab-blue, #1a3560)',
                marginBottom: 12,
              }}
            >
              Ejerne fortæller
            </p>
            <blockquote
              style={{
                fontFamily: CF,
                fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                fontWeight: 300,
                lineHeight: 1.45,
                color: 'var(--color-ab-text, #1a1a1a)',
                fontStyle: 'italic',
                margin: '0 0 20px',
              }}
            >
              &ldquo;Restauranten drives af to sicilianske brødre, og Acqua Blu er en af de få ægte italienske restauranter på Vestkysten — hvilket vi er stolte af.&rdquo;
            </blockquote>
            <p
              style={{
                fontFamily: CF,
                fontSize: '1.1rem',
                color: 'var(--color-ab-blue, #1a3560)',
                letterSpacing: '0.04em',
              }}
            >
              Buon Appetito &mdash; Salvatore e Rino Lalicata
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
