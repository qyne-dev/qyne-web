import type { ReactNode } from 'react'
import { Check } from 'lucide-react'
import { cn } from '../../lib/utils'

/** Shared chrome for every process step mock. */
function PanelShell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-surface-2 p-5">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="label text-faint">{label}</span>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-70 animate-ping" />
          <span className="relative h-2 w-2 rounded-full bg-primary" />
        </span>
      </div>
      <div className="pt-4">{children}</div>
    </div>
  )
}

const SOURCES = [
  { name: 'Apple Watch', status: 'Synced', wearable: true },
  { name: 'Garmin Forerunner', status: 'Synced', wearable: true },
  { name: 'WHOOP 4.0', status: 'Synced', wearable: true },
  { name: 'Morning check-in', status: '30s', wearable: false },
]

export function ConnectPanel() {
  return (
    <PanelShell label="Connected data sources">
      <div className="-my-0.5">
        {SOURCES.map((s, i) => (
          <div
            key={s.name}
            className={cn(
              'flex items-center justify-between py-2.5',
              i < SOURCES.length - 1 && 'border-b border-border',
            )}
          >
            <span className="flex items-center gap-2.5 text-[13px] text-ink">
              <span
                className={cn('h-2 w-2 rounded-full', s.wearable ? 'bg-primary' : 'bg-info')}
              />
              {s.name}
            </span>
            <span className="font-mono text-[11px] text-faint">{s.status}</span>
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

const SIGNALS = [
  { name: 'Heart-rate variability', value: 0.78, conf: '0.92' },
  { name: 'Sleep quality', value: 0.6, conf: '0.71' },
  { name: 'Resting heart rate', value: 0.71, conf: '0.88' },
  { name: 'Training load · ACWR', value: 0.85, conf: '0.95' },
]

export function ReadPanel() {
  return (
    <PanelShell label="Readiness signals">
      <div className="space-y-3.5">
        {SIGNALS.map((s) => (
          <div key={s.name}>
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-muted">{s.name}</span>
              <span className="font-mono text-faint">conf {s.conf}</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${s.value * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

const DAYS = [
  { d: 'M', load: 0.92, tone: 'bg-primary' },
  { d: 'T', load: 0.54, tone: 'bg-primary/55' },
  { d: 'W', load: 0.78, tone: 'bg-primary' },
  { d: 'T', load: 0.34, tone: 'bg-info/60' },
  { d: 'F', load: 0.86, tone: 'bg-primary' },
  { d: 'S', load: 0.5, tone: 'bg-primary/55' },
  { d: 'S', load: 0.16, tone: 'bg-border' },
]

function Legend({ tone, label }: { tone: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={cn('h-2 w-2 rounded-sm', tone)} />
      {label}
    </span>
  )
}

export function ProposePanel() {
  return (
    <PanelShell label="Generated weekly plan">
      <div className="flex h-28 items-end justify-between gap-2">
        {DAYS.map((day, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex w-full flex-1 items-end">
              <div
                className={cn('w-full rounded-sm', day.tone)}
                style={{ height: `${day.load * 100}%` }}
              />
            </div>
            <span className="font-mono text-[11px] text-faint">{day.d}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-4 border-t border-border pt-3 text-[11px] text-faint">
        <Legend tone="bg-primary" label="Strength" />
        <Legend tone="bg-info/60" label="Recovery" />
        <Legend tone="bg-border" label="Rest" />
      </div>
    </PanelShell>
  )
}

const PROGRESS = [
  { week: 'W1', value: 0.42 },
  { week: 'W2', value: 0.5 },
  { week: 'W3', value: 0.61 },
  { week: 'W4', value: 0.58 },
  { week: 'W5', value: 0.72 },
  { week: 'W6', value: 0.84 },
]

export function ProgressPanel() {
  const w = 100
  const h = 56
  const step = w / (PROGRESS.length - 1)
  const points = PROGRESS.map((p, i) => `${i * step},${h - p.value * h}`)
  return (
    <PanelShell label="Performance over time">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-28 w-full" fill="none" aria-hidden="true">
        <polyline
          points={`0,${h} ${points.join(' ')} ${w},${h}`}
          fill="var(--color-primary)"
          fillOpacity="0.1"
        />
        <polyline
          points={points.join(' ')}
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {PROGRESS.map((p, i) => (
          <circle key={p.week} cx={i * step} cy={h - p.value * h} r="2.2" fill="var(--color-primary)" />
        ))}
      </svg>
      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
        <span className="text-[12px] text-faint">Readiness trending up · 6 weeks</span>
        <span className="flex items-center gap-1 font-mono text-[11px] text-primary">
          <Check size={12} />
          On plan
        </span>
      </div>
    </PanelShell>
  )
}

