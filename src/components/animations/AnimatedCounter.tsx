import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { EASE } from './ScrollReveal'

interface AnimatedCounterProps {
  /** Target value to count up to. */
  to: number
  from?: number
  duration?: number
  /** Seconds to wait after entering view before counting. */
  delay?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

/** Counts from `from` to `to` once it scrolls into view. */
export function AnimatedCounter({
  to,
  from = 0,
  duration = 1.6,
  delay = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduced = useReducedMotion()
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setValue(to)
      return
    }
    const controls = animate(from, to, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, reduced, from, to, duration, delay])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
