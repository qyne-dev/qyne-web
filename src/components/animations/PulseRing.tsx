import { useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface PulseRingProps {
  /** Number of concentric rings emitted. */
  count?: number
  /** Tailwind border-color class for the rings. */
  colorClass?: string
  className?: string
}

/**
 * Decorative rings that pulse slowly outward from their container.
 * Place inside a `relative` parent. Hidden when reduced motion is on.
 */
export function PulseRing({
  count = 3,
  colorClass = 'border-primary/40',
  className,
}: PulseRingProps) {
  const reduced = useReducedMotion()
  if (reduced) return null

  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={cn(
            'absolute inset-0 rounded-full border animate-pulse-ring',
            colorClass,
            className,
          )}
          style={{ animationDelay: `${(i * 2.8) / count}s` }}
        />
      ))}
    </span>
  )
}
