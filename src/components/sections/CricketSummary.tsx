import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Activity, Crosshair, Target, Layers, ArrowRight } from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

// What QYNE does in cricket — a brief summary, as points.
const LENSES: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Activity, title: 'Bowling biomechanics', body: 'Joint angles and release metrics, phase by phase, from a single side-view.' },
  { icon: Crosshair, title: 'Ball tracking', body: 'Hawk-eye line, length and stump-impact prediction, with a skill score.' },
  { icon: Target, title: 'Batting analysis', body: 'Bat speed, impact point, smash factor and shot maps around the ground.' },
  { icon: Layers, title: 'Athlete comparison', body: 'Superimpose and sync two actions to measure progress, frame by frame.' },
]

// Objective outputs computed from a single bowling video.
const METRICS: { value: string; unit: string; label: string }[] = [
  { value: '138.6', unit: 'km/h', label: 'Release speed' },
  { value: '8.92', unit: 'm/s', label: 'Max velocity' },
  { value: '26.4', unit: 'm/s', label: 'Shoulder speed' },
  { value: '2.15', unit: 'BW', label: 'Braking force' },
  { value: '0.56', unit: 's', label: 'Flight time' },
]

/** Landing-page teaser for cricket intelligence; links to the full /cricket page. */
export function CricketSummary() {
  return (
    <Section id="cricket" className="border-t border-border bg-surface">
      <SectionHeading
        eyebrow="Cricket intelligence"
        title="Built for cricket. Down to the biomechanics."
        description="QYNE's computer vision turns ordinary net and match footage into objective skill data — feeding the same periodized plan."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* What we do — brief summary as points (left) */}
        <div>
          <ul className="flex flex-col gap-6">
            {LENSES.map((l) => (
              <li key={l.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-bg">
                  <l.icon size={17} className="text-primary" />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium tracking-tight text-ink">{l.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-muted">{l.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/cricket"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Explore cricket intelligence
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Pose-tracked bowling action + the metrics it yields (right) */}
        <ScrollReveal>
          <img
            src="/platform/cricket-bowling-cut.png"
            alt="Bowling action analysed by computer vision — joint angles and release tracked from a single video"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-[560px]"
          />
          <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {METRICS.map((m) => (
              <div key={m.label} className="rounded-md border border-border bg-bg px-2 py-2 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-mono text-[14px] font-medium leading-none text-ink">{m.value}</span>
                  <span className="text-[9px] text-faint">{m.unit}</span>
                </div>
                <div className="mt-1 text-[10px] leading-tight text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
