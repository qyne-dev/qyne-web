import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

/** Shared chrome for the academy feature mockups. */
function MockShell({
  label,
  meta,
  children,
}: {
  label: string
  meta: string
  children: ReactNode
}) {
  return (
    <div className="rounded-lg border border-border bg-surface-2 p-4">
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <span className="label text-faint">{label}</span>
        <span className="font-mono text-[11px] text-faint">{meta}</span>
      </div>
      <div className="pt-3">{children}</div>
    </div>
  )
}

const ROSTER = [
  { name: 'Arjun R.', score: 82, status: 'Full load', tone: 'bg-primary' },
  { name: 'Meera K.', score: 76, status: 'Full load', tone: 'bg-primary' },
  { name: 'Rohan S.', score: 61, status: 'Modified', tone: 'bg-warning' },
  { name: 'Kiran D.', score: 48, status: 'Recovery', tone: 'bg-danger' },
]

export function RosterMock() {
  return (
    <MockShell label="Monday roster" meta="U-19 · 12">
      <div className="-my-0.5">
        {ROSTER.map((r, i) => (
          <div
            key={r.name}
            className={cn(
              'flex items-center justify-between py-2',
              i < ROSTER.length - 1 && 'border-b border-border',
            )}
          >
            <span className="flex items-center gap-2.5 text-[12px] text-ink">
              <span className={cn('h-2 w-2 rounded-full', r.tone)} />
              {r.name}
            </span>
            <span className="flex items-center gap-3">
              <span className="font-mono text-[12px] text-muted">{r.score}</span>
              <span className="w-[68px] text-right text-[11px] text-faint">{r.status}</span>
            </span>
          </div>
        ))}
      </div>
    </MockShell>
  )
}

const ACWR = [0.92, 1.08, 0.84, 1.46, 1.02, 0.72, 1.18]
const ACWR_MAX = 1.8

export function WorkloadMock() {
  return (
    <MockShell label="Squad workload" meta="ACWR">
      <div className="relative h-28">
        <div
          aria-hidden
          className="absolute inset-x-0 border-y border-dashed border-primary/30 bg-primary/5"
          style={{
            bottom: `${(0.8 / ACWR_MAX) * 100}%`,
            top: `${(1 - 1.3 / ACWR_MAX) * 100}%`,
          }}
        />
        <div className="relative flex h-full items-end justify-between gap-1.5">
          {ACWR.map((v, i) => {
            const tone =
              v > 1.3 ? 'bg-danger' : v < 0.8 ? 'bg-warning' : 'bg-primary'
            return (
              <div
                key={i}
                className={cn('w-full rounded-sm', tone)}
                style={{ height: `${(v / ACWR_MAX) * 100}%` }}
              />
            )
          })}
        </div>
      </div>
      <div className="mt-2.5 flex justify-between border-t border-border pt-2 text-[11px] text-faint">
        <span>7 bowlers</span>
        <span className="font-mono">safe 0.8–1.3</span>
      </div>
    </MockShell>
  )
}

const REPORT_CHART = [0.5, 0.72, 0.56, 0.86, 0.64, 0.92]

export function ReportMock() {
  return (
    <MockShell label="Parent report" meta="PDF">
      <div className="space-y-2">
        <div className="h-2 w-2/3 rounded bg-border" />
        <div className="h-2 w-full rounded bg-border" />
        <div className="h-2 w-5/6 rounded bg-border" />
      </div>
      <div className="mt-3 flex h-16 items-end gap-1.5 rounded-md border border-border bg-surface p-2">
        {REPORT_CHART.map((h, i) => (
          <div
            key={i}
            className="w-full rounded-sm bg-primary/70"
            style={{ height: `${h * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-3 space-y-2">
        <div className="h-2 w-3/4 rounded bg-border" />
        <div className="h-2 w-1/2 rounded bg-border" />
      </div>
    </MockShell>
  )
}
