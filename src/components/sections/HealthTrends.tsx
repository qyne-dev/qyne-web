import { Lightbulb } from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal, Stagger } from '../animations/ScrollReveal'
import { ImageFrame } from '../visuals/Showcase'

const SCORES = [
  { label: 'Resting HR', value: '52', unit: 'bpm', note: '7-day avg', color: 'var(--color-danger)' },
  { label: 'HRV', value: '68', unit: 'ms', note: '7-day avg', color: 'var(--color-primary)' },
  { label: 'Sleep', value: '82', unit: '/100', note: 'Good', color: 'var(--color-accent)' },
  { label: 'Recovery', value: '76', unit: '/100', note: 'Good', color: 'var(--color-primary)' },
  { label: 'Strain', value: '14.2', unit: '/21', note: 'Moderate', color: 'var(--color-warning)' },
]

export function HealthTrends() {
  return (
    <Section id="health" className="border-t border-border bg-surface">
      <SectionHeading
        eyebrow="Health trends"
        title="Track. Understand. Improve."
        description="Every signal, tracked over time and weighted by how far the device can be trusted — so trends mean something before they become problems."
      />

      <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {SCORES.map((s) => (
          <Stagger.Item key={s.label} className="h-full">
            <div className="flex h-full flex-col rounded-lg border border-border bg-bg p-5">
              <span className="label text-faint">{s.label}</span>
              <div className="mt-3 flex items-baseline gap-1">
                <span
                  className="font-mono text-[2.1rem] font-medium leading-none"
                  style={{ color: s.color }}
                >
                  {s.value}
                </span>
                <span className="text-[13px] text-faint">{s.unit}</span>
              </div>
              <span className="mt-2 text-[13px] text-muted">{s.note}</span>
            </div>
          </Stagger.Item>
        ))}
      </Stagger>

      <ScrollReveal delay={0.1} className="mt-10">
        <ImageFrame
          src="/platform/02-health-trends.jpg"
          alt="QYNE health trends dashboard showing RHR, HRV, sleep, recovery and strain over two weeks"
        />
      </ScrollReveal>

      <ScrollReveal
        delay={0.15}
        className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-bg p-5"
      >
        <Lightbulb size={18} className="mt-0.5 shrink-0 text-primary" />
        <p className="text-[15px] leading-[1.55] text-muted">
          <span className="font-medium text-ink">Key insight:</span> resting heart rate
          is trending lower while HRV climbs — clear signs of recovery and rising
          fitness.
        </p>
      </ScrollReveal>
    </Section>
  )
}
