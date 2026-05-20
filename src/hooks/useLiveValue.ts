import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Gently jitters a number around `base` to imply live, syncing data.
 * Stays still when the user prefers reduced motion.
 */
export function useLiveValue(base: number, jitter = 1, intervalMs = 3400): number {
  const reduced = useReducedMotion()
  const [value, setValue] = useState(base)

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => {
      const delta = Math.round((Math.random() * 2 - 1) * jitter)
      setValue(base + delta)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [base, jitter, intervalMs, reduced])

  return value
}
