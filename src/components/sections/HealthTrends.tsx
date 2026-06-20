import { Lightbulb, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal, EASE } from '../animations/ScrollReveal'

/* ------------------------------------------------------------------ *
 * Native rebuild of the "Your health trends" dashboard — two trend
 * charts (RHR, HRV) over the score tiles (sleep, recovery, strain),
 * matching the source layout but rendered in the QYNE design system.
 * ------------------------------------------------------------------ */

// 14-day series. RHR drifts down (good), HRV drifts up (good).
const RHR = [58, 57, 57, 56, 55, 56, 54, 55, 53, 54, 52, 53, 52, 52]
const HRV = [60, 61, 59, 63, 62, 64, 63, 66, 65, 67, 66, 68, 67, 68]

/** Maps a data series to [x, y] points inside a padded viewbox. */
function points(data: number[], w: number, h: number, pad: number) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const stepX = (w - pad * 2) / (data.length - 1)
  return data.map((v, i) => {
    const x = pad + i * stepX
    const y = pad + (1 - (v - min) / range) * (h - pad * 2)
    return [x, y] as const
  })
}

function TrendChart({ data, color, id }: { data: number[]; color: string; id: string }) {
  const w = 280
  const h = 96
  const pad = 10
  const pts = points(data, w, h, pad)
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
  const area = `${line} L${(w - pad).toFixed(1)} ${h} L${pad} ${h} Z`
  const [lastX, lastY] = pts[pts.length - 1]

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-4 h-24 w-full" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.22" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill={`url(#${id})`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: EASE }}
      />
      <motion.circle
        cx={lastX}
        cy={lastY}
        r="3.2"
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.3, ease: EASE, delay: 1 }}
        style={{ transformOrigin: `${lastX}px ${lastY}px` }}
      />
    </svg>
  )
}

function TrendCard({
  label,
  value,
  unit,
  avg,
  delta,
  trendGood,
  color,
  data,
  id,
}: {
  label: string
  value: string
  unit: string
  avg: string
  delta: string
  trendGood: boolean
  color: string
  data: number[]
  id: string
}) {
  const Arrow = trendGood && id === 'hrv' ? ArrowUpRight : ArrowDownRight
  return (
    <div className="bg-bg p-5 sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <span className="label text-faint">{label}</span>
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="font-mono text-[2rem] font-medium leading-none" style={{ color }}>
              {value}
            </span>
            <span className="text-[13px] text-faint">{unit}</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-primary-bg px-2 py-1 text-[12px] font-medium text-primary">
          <Arrow size={13} />
          {delta}
        </span>
      </div>
      <TrendChart data={data} color={color} id={id} />
      <div className="mt-1 flex items-center justify-between text-[12px] text-faint">
        <span>14-day trend</span>
        <span className="font-mono">7-day avg {avg}</span>
      </div>
    </div>
  )
}

function ScoreRing({ value, color }: { value: number; color: string }) {
  const size = 74
  const stroke = 7
  const r = (size - stroke) / 2
  const c = size / 2
  const circ = 2 * Math.PI * r
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90 shrink-0">
      <circle cx={c} cy={c} r={r} fill="none" stroke="var(--color-border)" strokeWidth={stroke} />
      <motion.circle
        cx={c}
        cy={c}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ * (1 - value / 100) }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
      />
      <text
        x={c}
        y={c}
        transform={`rotate(90 ${c} ${c})`}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-ink font-mono"
        style={{ fontSize: 20, fontWeight: 500 }}
      >
        {value}
      </text>
    </svg>
  )
}

function RingTile({
  label,
  value,
  status,
  color,
}: {
  label: string
  value: number
  status: string
  color: string
}) {
  return (
    <div className="flex items-center gap-4 bg-bg p-5 sm:p-6">
      <ScoreRing value={value} color={color} />
      <div>
        <span className="label text-faint">{label}</span>
        <div className="mt-1.5 text-[15px] font-medium text-ink">{status}</div>
        <div className="text-[12px] text-faint">out of 100</div>
      </div>
    </div>
  )
}

function StrainTile() {
  const max = 21
  const value = 14.2
  const filled = Math.round(value)
  return (
    <div className="flex items-center gap-4 bg-bg p-5 sm:p-6">
      <div className="flex h-[74px] items-end gap-[3px]">
        {Array.from({ length: max }).map((_, i) => (
          <span
            key={i}
            className="w-[4px] rounded-full"
            style={{
              height: `${30 + (i / max) * 44}px`,
              backgroundColor: i < filled ? 'var(--color-warning)' : 'var(--color-border)',
            }}
          />
        ))}
      </div>
      <div>
        <span className="label text-faint">Strain</span>
        <div className="mt-1.5 flex items-baseline gap-1">
          <span className="font-mono text-[1.5rem] font-medium leading-none text-warning">
            {value}
          </span>
          <span className="text-[12px] text-faint">/ {max}</span>
        </div>
        <div className="mt-1 text-[12px] text-faint">Moderate</div>
      </div>
    </div>
  )
}

export function HealthTrends() {
  return (
    <Section id="health" className="border-t border-border bg-surface">
      <SectionHeading
        eyebrow="Health trends"
        title="Track. Understand. Improve."
        description="Every signal, tracked over time and weighted by how far the device can be trusted — so trends mean something before they become problems."
      />

      <ScrollReveal delay={0.1} className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-border bg-bg shadow-2xl shadow-black/30">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <span className="label text-faint">Your health trends</span>
            <span className="font-mono text-[12px] text-faint">Last 14 days</span>
          </div>

          {/* Trend charts */}
          <div className="grid gap-px bg-border sm:grid-cols-2">
            <TrendCard
              label="Resting HR"
              value="52"
              unit="bpm"
              avg="54"
              delta="3 bpm"
              trendGood
              color="var(--color-danger)"
              data={RHR}
              id="rhr"
            />
            <TrendCard
              label="HRV"
              value="68"
              unit="ms"
              avg="65"
              delta="6 ms"
              trendGood
              color="var(--color-primary)"
              data={HRV}
              id="hrv"
            />
          </div>

          {/* Score tiles */}
          <div className="grid gap-px border-t border-border bg-border sm:grid-cols-3">
            <RingTile label="Sleep" value={82} status="Good" color="var(--color-accent)" />
            <RingTile label="Recovery" value={76} status="Good" color="var(--color-primary)" />
            <StrainTile />
          </div>
        </div>
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
