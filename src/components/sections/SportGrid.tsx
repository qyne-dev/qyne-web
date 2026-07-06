import { Check } from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { Stagger } from '../animations/ScrollReveal'
import { SPORTS } from '../../lib/sports'

/** The sports covered by skill-based assessment — Cricket live (Phase 1), the rest on the roadmap. */
export function SportGrid() {
  return (
    <Section className="border-t border-border bg-surface">
      <SectionHeading
        eyebrow="Multi-sport"
        title="One framework. Every sport."
        description="The same expert-built, video-powered method adapts to each sport's true intricacies. We're rolling out sport by sport — Cricket is live first."
      />

      <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SPORTS.map((s) => {
          const live = s.status === 'live'
          return (
            <Stagger.Item key={s.name}>
              <div
                className={
                  'flex h-full flex-col rounded-xl border p-5 transition-colors ' +
                  (live ? 'border-primary/40 bg-primary-bg' : 'border-border bg-bg hover:border-faint/40')
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[17px] font-medium tracking-tight text-ink">{s.name}</h3>
                  {live ? (
                    <span className="inline-flex items-center gap-1 rounded-sm bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                      <Check size={11} /> Phase 1 · Live
                    </span>
                  ) : (
                    <span className="rounded-sm border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-faint">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-muted">
                  {live
                    ? 'Bowling & batting analysis from multiple angles — 2D-to-3D biomechanics, ball tracking and athlete comparison.'
                    : 'Sport-specific, expert-built skill assessment on the same framework.'}
                </p>
              </div>
            </Stagger.Item>
          )
        })}
      </Stagger>
    </Section>
  )
}
