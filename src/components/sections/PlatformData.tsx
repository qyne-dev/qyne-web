import {
  BrainCircuit,
  Layers,
  ShieldCheck,
  LineChart,
} from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal, Stagger } from '../animations/ScrollReveal'
import { ImageFrame } from '../visuals/Showcase'

const BRANDS = [
  'WHOOP',
  'Apple Watch',
  'Garmin',
  'Oura',
  'Fitbit',
  'Amazfit',
  'boAt',
  'Fittr',
  '& many more',
]

const WHY = [
  { icon: Layers, title: 'Holistic insights', body: 'Sleep, recovery, strain and performance in one view.' },
  { icon: BrainCircuit, title: 'Smarter training', body: 'Plans tailored to your body, not a template.' },
  { icon: ShieldCheck, title: 'Lower injury risk', body: 'Data-driven decisions catch overload early.' },
  { icon: LineChart, title: 'Long-term results', body: 'Consistent progress you can measure.' },
]

export function PlatformData() {
  return (
    <Section id="platform" className="border-t border-border">
      <SectionHeading
        eyebrow="One platform"
        title="One platform. All your data."
        description="QYNE integrates with the world's leading wearables to unlock deep physiological insight — and power personalized training, recovery and performance."
      />

      {/* Compatibility */}
      <Stagger className="mt-12 flex flex-wrap gap-2.5">
        {BRANDS.map((b) => (
          <Stagger.Item key={b}>
            <span className="inline-flex items-center rounded-md border border-border bg-surface px-4 py-2 text-[14px] text-muted">
              {b}
            </span>
          </Stagger.Item>
        ))}
      </Stagger>

      <ScrollReveal delay={0.1} className="mt-10">
        <ImageFrame
          src="/platform/03-platform-data.jpg"
          alt="QYNE platform — compatible with WHOOP, Apple Watch, Garmin, Oura, Fitbit and more"
        />
      </ScrollReveal>

      {/* Why it matters */}
      <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w) => (
          <Stagger.Item key={w.title} className="h-full">
            <div className="flex h-full flex-col rounded-lg border border-border bg-surface p-5">
              <w.icon size={20} className="text-primary" />
              <h4 className="mt-3.5 text-[15px] font-medium tracking-tight text-ink">
                {w.title}
              </h4>
              <p className="mt-1 text-[13px] leading-[1.5] text-muted">{w.body}</p>
            </div>
          </Stagger.Item>
        ))}
      </Stagger>
    </Section>
  )
}
