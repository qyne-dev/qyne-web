import type { ReactNode } from 'react'
import { Check, TriangleAlert } from 'lucide-react'
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

const REVIEW = [
  { name: 'Arjun R.', score: 82, adjusted: false },
  { name: 'Meera K.', score: 74, adjusted: false },
  { name: 'Rohan S.', score: 61, adjusted: true },
]

export function ApprovePanel() {
  return (
    <PanelShell label="Monday coach review">
      <div className="-my-0.5">
        {REVIEW.map((r, i) => (
          <div
            key={r.name}
            className={cn(
              'flex items-center justify-between py-2.5',
              i < REVIEW.length - 1 && 'border-b border-border',
            )}
          >
            <span className="text-[13px] text-ink">{r.name}</span>
            <span className="flex items-center gap-3">
              <span className="font-mono text-[12px] text-muted">{r.score}</span>
              {r.adjusted ? (
                <span className="flex w-[78px] items-center gap-1 text-[11px] text-warning">
                  <TriangleAlert size={12} />
                  Adjusted
                </span>
              ) : (
                <span className="flex w-[78px] items-center gap-1 text-[11px] text-primary">
                  <Check size={12} />
                  Approved
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
        <span className="text-[12px] text-faint">24 athletes · 15 min</span>
        <span className="rounded-md bg-primary px-2.5 py-1 text-[11px] font-medium text-bg">
          Approve all
        </span>
      </div>
    </PanelShell>
  )
}
