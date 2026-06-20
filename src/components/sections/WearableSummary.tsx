import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Watch, RefreshCw, CircleDot, ArrowRight } from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

const POINTS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Watch,
    title: 'Bring your own band',
    body: 'Connect WHOOP, Apple Watch, Garmin, Oura, Fitbit and more — auto-synced.',
  },
  {
    icon: RefreshCw,
    title: 'Signals become a plan',
    body: 'Sleep, recovery, strain and heart-rate flow straight into the periodization engine.',
  },
  {
    icon: CircleDot,
    title: 'Or wear the QYNE band',
    body: 'No wearable yet? Our screenless fabric band measures everything that matters.',
  },
]

// A taste of the supported wearables — the full wall lives on /wearable.
const BRANDS = ['WHOOP', 'Apple Watch', 'GARMIN', 'ŌURA', 'Fitbit', 'boAt']

/** Landing-page teaser for the wearable layer; links to the full /wearable page. */
export function WearableSummary() {
  return (
    <Section id="wearable" className="border-t border-border">
      <SectionHeading
        eyebrow="The wearable layer"
        title="Train from the band you already wear."
        description="QYNE works with the wearable you already own — or pairs with the screenless QYNE band. Either way, your body’s signals become a personalized, periodized plan."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Product visual */}
        <ScrollReveal className="order-last lg:order-first">
          <div className="relative grid place-items-center overflow-hidden rounded-xl bg-bg px-4 py-8">
            <img
              src="/platform/band.png"
              alt="The QYNE band — a screenless fabric wearable"
              width={1024}
              height={1536}
              loading="lazy"
              decoding="async"
              className="relative w-full max-w-[260px]"
              style={{
                maskImage:
                  'radial-gradient(ellipse 78% 70% at 50% 50%, #000 68%, transparent 100%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 78% 70% at 50% 50%, #000 68%, transparent 100%)',
              }}
            />
          </div>
        </ScrollReveal>

        {/* Points + supported brands + link */}
        <div>
          <ul className="flex flex-col gap-6">
            {POINTS.map((p) => (
              <li key={p.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-surface-2">
                  <p.icon size={17} className="text-primary" />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6">
            {BRANDS.map((b) => (
              <span key={b} className="text-[14px] font-medium tracking-tight text-faint">
                {b}
              </span>
            ))}
            <span className="text-[14px] text-faint">+ many more</span>
          </div>

          <Link
            to="/wearable"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Explore the wearable
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
