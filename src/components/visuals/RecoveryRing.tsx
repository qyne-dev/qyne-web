import { motion } from 'framer-motion'
import { AnimatedCounter } from '../animations/AnimatedCounter'
import { EASE } from '../animations/ScrollReveal'
import { cn } from '../../lib/utils'

interface RecoveryRingProps {
  /** Score 0–100. */
  score: number
  size?: number
  className?: string
}

/** Circular readiness gauge with the score counting up at its centre. */
export function RecoveryRing({ score, size = 172, className }: RecoveryRingProps) {
  const stroke = 9
  const r = (size - stroke) / 2
  const c = size / 2

  return (
    <div
      className={cn('relative grid place-items-center', className)}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        aria-hidden="true"
      >
        <circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth={stroke}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: score / 100 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.35 }}
        />
      </svg>

      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="font-mono text-[46px] font-medium leading-none text-primary">
            <AnimatedCounter to={score} duration={1.6} delay={0.35} />
          </div>
          <div className="label mt-2 text-faint">Recovery</div>
        </div>
      </div>
    </div>
  )
}
