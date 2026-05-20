import { useMemo } from 'react'
import { motion } from 'framer-motion'

/** Builds a layered-sine path that reads as heart-rate variability. */
function buildPath(width: number, height: number, steps: number): string {
  const mid = height / 2
  let d = ''
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width
    const y =
      mid -
      (Math.sin(i * 0.55) * 12 +
        Math.sin(i * 0.21 + 1) * 6.5 +
        Math.sin(i * 1.12) * 2.8)
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return d
}

interface HrvWaveformProps {
  className?: string
  /** Seconds before the left-to-right draw begins. */
  delay?: number
}

/** Decorative HRV trace that draws itself in from left to right. */
export function HrvWaveform({ className, delay = 0 }: HrvWaveformProps) {
  const width = 320
  const height = 64
  const d = useMemo(() => buildPath(width, height, 60), [])

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hrv-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--color-primary)" stopOpacity="0" />
          <stop offset="0.1" stopColor="var(--color-primary)" stopOpacity="1" />
          <stop offset="0.9" stopColor="var(--color-primary)" stopOpacity="1" />
          <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={d}
        stroke="url(#hrv-stroke)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 1.9, ease: 'easeInOut', delay },
          opacity: { duration: 0.4, delay },
        }}
      />
    </svg>
  )
}
