import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Handshake, Smartphone, Target, Layers, ArrowRight } from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'
import { SPORTS } from '../../lib/sports'

// The pillars of a QYNE skill assessment — sport-specific, expert-built, video-powered.
const PILLARS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Handshake, title: 'World-class partnerships', body: 'Built with elite coaches to capture the true intricacies of each sport.' },
  { icon: Smartphone, title: 'Smartphone video assessments', body: 'Easy to record, easy to analyze — from any angle, anytime, anywhere.' },
  { icon: Target, title: 'Skill-based goals', body: 'Actionable insights to set, track and achieve sport-specific goals.' },
  { icon: Layers, title: '360° athlete view', body: 'Beyond strength & conditioning — technique, timing, decision-making and execution.' },
]

// Objective outputs computed from a single Phase-1 cricket bowling video.
const METRICS: { value: string; unit: string; label: string }[] = [
  { value: '138.6', unit: 'km/h', label: 'Release speed' },
  { value: '8.92', unit: 'm/s', label: 'Max velocity' },
  { value: '26.4', unit: 'm/s', label: 'Shoulder speed' },
  { value: '2.15', unit: 'BW', label: 'Braking force' },
  { value: '0.56', unit: 's', label: 'Flight time' },
]

/** Landing teaser for skill-based, multi-sport assessment; links to the full /cricket page. */
export function SkillAssessment() {
  return (
    <Section id="skill" className="border-t border-border bg-surface">
      <SectionHeading
        eyebrow="Skill-based assessment"
        title="Skill-based. Sport-specific. Video-powered."
        description="Expert-built, computer-vision assessments turn ordinary phone footage into objective skill data for your sport — feeding the same periodized plan. Cricket is live now as Phase 1, with more sports on the way."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* The assessment pillars (left) */}
        <div>
          <ul className="flex flex-col gap-6">
            {PILLARS.map((p) => (
              <li key={p.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-bg">
                  <p.icon size={17} className="text-primary" />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Multi-sport coverage */}
          <div className="mt-8">
            <span className="label text-faint">Sports</span>
            <ul className="mt-3 flex flex-wrap gap-2">
              {SPORTS.map((s) => (
                <li
                  key={s.name}
                  className={
                    s.status === 'live'
                      ? 'inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary-bg px-2.5 py-1.5 text-[13px] font-medium text-primary'
                      : 'inline-flex items-center gap-1.5 rounded-md border border-border bg-bg px-2.5 py-1.5 text-[13px] text-muted'
                  }
                >
                  {s.name}
                  {s.status === 'live' && (
                    <span className="rounded-sm bg-primary/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-primary">
                      Phase 1
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/cricket"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Explore skill assessments
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Phase-1 cricket example: pose-tracked bowling action + its metrics (right) */}
        <ScrollReveal>
          <span className="label text-faint">Phase 1 · Cricket</span>
          <img
            src="/platform/cricket-bowling-cut.png"
            alt="Phase 1 cricket assessment — bowling action analysed by computer vision, joint angles and release tracked from a single video"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className="mx-auto mt-3 w-full max-w-[560px]"
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
