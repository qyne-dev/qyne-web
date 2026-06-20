import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Moon, HeartPulse, BatteryLow, Activity, Brain, Heart, Gauge } from 'lucide-react'
import { EASE } from '../animations/ScrollReveal'
import { cn } from '../../lib/utils'

/* A compact, native recreation of QYNE's "Today's Workout" dashboard, drawn
   entirely in the design language — used as the Performance-system side visual. */

/** Readiness donut — a single arc filled to `value`%. */
function ReadinessRing({ value }: { value: number }) {
  const r = 30
  const c = 2 * Math.PI * r
  return (
    <div className="relative h-[78px] w-[78px] shrink-0">
      <svg viewBox="0 0 72 72" className="h-full w-full -rotate-90">
        <circle cx="36" cy="36" r={r} fill="none" stroke="var(--color-border)" strokeWidth="6" />
        <motion.circle
          cx="36" cy="36" r={r} fill="none"
          stroke="var(--color-primary)" strokeWidth="6" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - value / 100) }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-[1.2rem] font-medium leading-none text-ink">{value}%</span>
        <span className="text-[9px] font-medium tracking-wide text-primary">HIGH</span>
      </div>
    </div>
  )
}

/** Tiny inline sparkline from a normalized series. */
function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const span = max - min || 1
  const pts = data
    .map((v, i) => `${(i / (data.length - 1)) * 100},${20 - ((v - min) / span) * 16}`)
    .join(' ')
  return (
    <svg viewBox="0 0 100 22" preserveAspectRatio="none" className="h-5 w-full" fill="none">
      <motion.polyline
        points={pts}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
      />
    </svg>
  )
}

const SIGNALS: { icon: LucideIcon; label: string; value: string; tone?: string }[] = [
  { icon: Moon, label: 'Sleep quality', value: '8.2 / 10' },
  { icon: HeartPulse, label: 'HRV status', value: '72 ms' },
  { icon: BatteryLow, label: 'Fatigue', value: 'Low', tone: 'text-primary' },
  { icon: Brain, label: 'Stress level', value: 'Low', tone: 'text-primary' },
]

const METRICS: { icon: LucideIcon; label: string; value: string; unit: string; color: string; data: number[] }[] = [
  { icon: Heart, label: 'Heart rate', value: '142', unit: 'bpm', color: 'var(--color-danger)', data: [3, 5, 2, 6, 3, 7, 4, 6, 5] },
  { icon: HeartPulse, label: 'HRV', value: '72', unit: 'ms', color: 'var(--color-primary)', data: [4, 5, 4, 6, 5, 6, 5, 7, 6] },
  { icon: Gauge, label: 'Training load', value: '410', unit: 'AU', color: 'var(--color-warning)', data: [2, 3, 4, 4, 5, 6, 6, 7, 7] },
  { icon: Activity, label: 'Recovery', value: '78', unit: '%', color: 'var(--color-info)', data: [5, 4, 6, 5, 7, 6, 7, 6, 7] },
]

type Intensity = 'Low' | 'Medium' | 'High'
const INTENSITY_CLS: Record<Intensity, string> = {
  Low: 'text-primary',
  Medium: 'text-warning',
  High: 'text-danger',
}

const PLAN: { drill: string; detail: string; intensity: Intensity }[] = [
  { drill: 'Dynamic warm-up', detail: '1 × 15 min', intensity: 'Low' },
  { drill: 'Bowling run-ups', detail: '6 × 6 reps', intensity: 'High' },
  { drill: 'Skill — line & length', detail: '5 × 6 balls', intensity: 'High' },
  { drill: 'Strength — lower body', detail: '4 × 6 reps', intensity: 'High' },
  { drill: 'Cool down & mobility', detail: '1 × 10 min', intensity: 'Low' },
]

export function PerformanceDashboard({ className }: { className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-xl border border-border bg-bg shadow-xl shadow-black/30', className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="text-[13px] font-medium tracking-[-0.02em] text-ink">QYNE</span>
          <span className="h-3.5 w-px bg-border" />
          <span className="label text-faint">Today’s workout</span>
        </div>
        <span className="grid h-6 w-6 place-items-center rounded-full border border-border bg-surface-2 font-mono text-[9px] text-muted">AM</span>
      </div>

      {/* Readiness */}
      <div className="border-b border-border p-4">
        <span className="label text-faint">Readiness to train</span>
        <div className="mt-3 flex items-center gap-4">
          <ReadinessRing value={87} />
          <ul className="min-w-0 flex-1 space-y-1.5">
            {SIGNALS.map((s) => (
              <li key={s.label} className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-[12px] text-muted">
                  <s.icon size={13} className="shrink-0 text-faint" />
                  {s.label}
                </span>
                <span className={cn('font-mono text-[12px]', s.tone ?? 'text-ink')}>{s.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Live metrics */}
      <div className="border-b border-border p-4">
        <span className="label text-faint">Physiological · live</span>
        <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3">
          {METRICS.map((m) => (
            <div key={m.label}>
              <div className="flex items-center gap-1.5">
                <m.icon size={12} style={{ color: m.color }} />
                <span className="text-[11px] text-faint">{m.label}</span>
              </div>
              <div className="mt-0.5 flex items-baseline gap-1">
                <span className="font-mono text-[1.05rem] font-medium leading-none text-ink">{m.value}</span>
                <span className="text-[10px] text-faint">{m.unit}</span>
              </div>
              <div className="mt-1"><Sparkline data={m.data} color={m.color} /></div>
            </div>
          ))}
        </div>
      </div>

      {/* Plan snippet */}
      <div className="p-4">
        <span className="label text-faint">Today’s plan</span>
        <div className="mt-2.5">
          {PLAN.map((row, i) => (
            <div
              key={row.drill}
              className={cn('flex items-center justify-between py-2', i < PLAN.length - 1 && 'border-b border-border')}
            >
              <span className="text-[12.5px] text-ink">{row.drill}</span>
              <span className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-faint">{row.detail}</span>
                <span className={cn('w-12 text-right text-[11px] font-medium', INTENSITY_CLS[row.intensity])}>
                  {row.intensity}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
