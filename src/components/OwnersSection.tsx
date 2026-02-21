import Image from 'next/image'
import ItalianFlag from './ItalianFlag'

const CF = 'var(--font-cormorant)'
const SC = 'var(--font-script)'
const DM = 'var(--font-dm)'

export default function OwnersSection() {
  return (
    <section className="bg-ab-ivory border-y border-ab-border">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-14 sm:py-18">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">

          {/* Photo */}
          <div className="relative shrink-0">
            <Image
              src="/images/owners.jpg"
              alt="Salvatore og Rino Lalicata"
              width={220}
              height={170}
              className="rounded-xl shadow-md"
              style={{ width: '220px', height: '170px', objectFit: 'cover', objectPosition: 'center top' }}
            />
            <div className="absolute -top-2.5 -right-2.5">
              <ItalianFlag width={36} height={23} />
            </div>
          </div>

          {/* Signature block */}
          <div className="flex flex-col justify-center gap-3 text-center sm:text-left">

            {/* Their actual motto from the menu */}
            <p
              className="text-ab-muted text-sm leading-relaxed italic"
              style={{ fontFamily: CF, fontSize: '1.1rem' }}
            >
              "God mad serveret med et smil — og at jeres besøg vil være en god oplevelse."
            </p>

            {/* Handwritten signature */}
            <div className="pt-2">
              <p
                className="text-ab-text leading-snug"
                style={{ fontFamily: SC, fontSize: '2rem', lineHeight: '1.25' }}
              >
                Buon Appetito
              </p>
              <p
                className="text-ab-muted"
                style={{ fontFamily: SC, fontSize: '1.65rem', lineHeight: '1.25' }}
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
