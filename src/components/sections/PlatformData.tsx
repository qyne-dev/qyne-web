import { Fragment } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  BrainCircuit,
  Layers,
  ShieldCheck,
  LineChart,
  Plus,
  Bluetooth,
  Cloud,
  BarChart3,
  TrendingUp,
  ChevronRight,
  Lock,
  KeyRound,
} from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal, Stagger } from '../animations/ScrollReveal'

// Brand-accurate casing — rendered as a monochrome wordmark wall.
const DEVICES = [
  'WHOOP',
  'Apple Watch',
  'GARMIN',
  'ŌURA',
  'Fitbit',
  'Amazfit',
  'boAt',
  'FITTR',
]

const STEPS: { icon: LucideIcon; name: string }[] = [
  { icon: Bluetooth, name: 'Sync' },
  { icon: Cloud, name: 'Collect' },
  { icon: BarChart3, name: 'Analyze' },
  { icon: BrainCircuit, name: 'Periodization engine' },
  { icon: TrendingUp, name: 'Perform & progress' },
]

const WHY: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Layers, title: 'Holistic insights', body: 'Sleep, recovery, strain and performance in one view.' },
  { icon: BrainCircuit, title: 'Smarter training', body: 'Plans tailored to your body, not a template.' },
  { icon: ShieldCheck, title: 'Lower injury risk', body: 'Data-driven decisions catch overload early.' },
  { icon: LineChart, title: 'Long-term results', body: 'Consistent progress you can measure.' },
]

const TRUST: { icon: LucideIcon; label: string }[] = [
  { icon: Lock, label: 'Private — never shared without permission' },
  { icon: ShieldCheck, label: 'Encrypted in transit and at rest' },
  { icon: KeyRound, label: 'You own your data — export or delete anytime' },
]

export function PlatformData() {
  return (
    <Section id="platform" className="border-t border-border">
      <SectionHeading
        eyebrow="One platform"
        title="One platform. All your data."
        description="QYNE integrates with the world's leading wearables to unlock deep physiological insight — and power personalized training, recovery and performance."
      />

      {/* How it works — a slim flow, the first thing you read */}
      <ScrollReveal delay={0.05} className="mt-12">
        <span className="label text-faint">How it works</span>
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
          {STEPS.map((s, i) => (
            <Fragment key={s.name}>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2.5">
                <s.icon size={16} className="text-primary" />
                <span className="whitespace-nowrap text-[13px] text-ink">{s.name}</span>
              </span>
              {i < STEPS.length - 1 && (
                <ChevronRight size={15} className="shrink-0 text-faint" />
              )}
            </Fragment>
          ))}
        </div>
      </ScrollReveal>

      {/* Connect what you already wear — the compatibility card */}
      <ScrollReveal delay={0.1} className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-border bg-bg shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <span className="label text-faint">Compatible wearables</span>
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="label text-faint">Auto-sync</span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3">
            {DEVICES.map((name) => (
              <div
                key={name}
                className="group/logo flex h-20 items-center justify-center bg-bg px-4"
              >
                <span className="text-[16px] font-medium tracking-tight text-muted transition-colors duration-200 group-hover/logo:text-ink">
                  {name}
                </span>
              </div>
            ))}
            <div className="flex h-20 items-center justify-center gap-1.5 bg-bg px-4">
              <Plus size={14} className="shrink-0 text-faint" />
              <span className="text-[14px] text-faint">many more</span>
            </div>
          </div>

          <p className="border-t border-border px-6 py-4 text-[13px] leading-[1.5] text-muted">
            Works with any wearable — premium straps to budget bands, each
            confidence-weighted. No device? A 30-second morning check-in works too.
          </p>
        </div>
      </ScrollReveal>

      {/* Why it matters — a clean borderless list */}
      <Stagger className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {WHY.map((w) => (
          <Stagger.Item key={w.title}>
            <div className="flex items-start gap-3">
              <w.icon size={18} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <h4 className="text-[15px] font-medium tracking-tight text-ink">
                  {w.title}
                </h4>
                <p className="mt-0.5 text-[13px] leading-[1.5] text-muted">{w.body}</p>
              </div>
            </div>
          </Stagger.Item>
        ))}
      </Stagger>

      {/* Data trust — one slim line */}
      <ScrollReveal
        delay={0.05}
        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6"
      >
        {TRUST.map((t) => (
          <span key={t.label} className="flex items-center gap-2 text-[13px] text-muted">
            <t.icon size={15} className="shrink-0 text-primary" />
            {t.label}
          </span>
        ))}
      </ScrollReveal>
    </Section>
  )
}
