import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE } from '../animations/ScrollReveal'
import { cn } from '../../lib/utils'

/** Surface card. Lifts slightly and brightens its border on hover. */
export function Card({
  children,
  className,
  interactive = true,
}: {
  children: ReactNode
  className?: string
  interactive?: boolean
}) {
  return (
    <motion.div
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ duration: 0.2, ease: EASE }}
      className={cn(
        'rounded-lg border border-border bg-surface',
        interactive && 'transition-colors duration-200 hover:border-faint',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
