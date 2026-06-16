import type { LucideIcon } from 'lucide-react'
import {
  Moon,
  HeartPulse,
  Heart,
  Flame,
  Footprints,
  Thermometer,
  Activity,
  Droplet,
  Gauge,
  Feather,
  BatteryFull,
  MonitorOff,
} from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal, Stagger } from '../animations/ScrollReveal'

interface Metric {
  icon: LucideIcon
  name: string
  body: string
  color: string
}

const METRICS: Metric[] = [
  { icon: Moon, name: 'Sleep score', body: 'Sleep quality and overnight recovery.', color: 'var(--color-accent)' },
  { icon: Heart, name: 'Resting HR', body: 'Resting heart rate, at a glance.', color: 'var(--color-danger)' },
  { icon: HeartPulse, name: 'HRV', body: 'Recovery and nervous-system resilience.', color: 'var(--color-primary)' },
  { icon: Flame, name: 'Strain', body: 'Training load and daily strain.', color: 'var(--color-warning)' },
  { icon: Footprints, name: 'Activity', body: 'Steps, calories, distance, active time.', color: 'var(--color-primary)' },
  { icon: Thermometer, name: 'Skin temperature', body: 'Temperature trends for early insights.', color: 'var(--color-warning)' },
  { icon: Activity, name: 'ECG', body: 'On-demand ECG for heart health.', color: 'var(--color-danger)' },
  { icon: Droplet, name: 'Blood glucose', body: 'Monitor glucose levels anytime.', color: 'var(--color-info)' },
  { icon: Gauge, name: 'Blood pressure', body: 'Track BP for better heart health.', color: 'var(--color-accent)' },
]

const SPECS = [
  { icon: MonitorOff, label: 'Screenless' },
  { icon: Feather, label: 'Lightweight' },
  { icon: Droplet, label: 'Water resistant' },
  { icon: BatteryFull, label: 'Long battery life' },
]

export function Wearable() {
  return (
    <Section id="wearable" className="border-t border-border">
      <SectionHeading
        eyebrow="The wearable"
        title="Measures what matters. Insights that empower."
        description="A screenless band that reads the signals serious training depends on — then hands them to the intelligence that turns them into a plan."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Device + specs */}
        <ScrollReveal className="flex flex-col">
          <div className="grid place-items-center rounded-xl border border-border bg-surface px-6 py-10">
            <img
              src="/platform/device.png"
              alt="The QYNE band — a screenless fabric wearable"
              loading="lazy"
              className="w-44 drop-shadow-2xl sm:w-52"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {SPECS.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3.5 py-3"
              >
                <s.icon size={16} className="shrink-0 text-primary" />
                <span className="text-[13px] text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Metric grid */}
        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {METRICS.map((m) => (
            <Stagger.Item key={m.name} className="h-full">
              <div className="flex h-full flex-col rounded-lg border border-border bg-surface p-4 transition-colors hover:border-faint">
                <m.icon size={20} style={{ color: m.color }} />
                <h4 className="mt-3.5 text-[15px] font-medium tracking-tight text-ink">
                  {m.name}
                </h4>
                <p className="mt-1 text-[13px] leading-[1.5] text-muted">{m.body}</p>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </Section>
  )
}
