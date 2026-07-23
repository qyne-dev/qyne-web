import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

/** Shared easing — calm, decelerating. All reveals stay under 600ms. Re-used by
 *  the other animation helpers, so it's intentionally exported from here. */
// eslint-disable-next-line react-refresh/only-export-components -- shared easing constant, not a component
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  /** Seconds of delay before the reveal begins. */
  delay?: number
  /** Vertical travel distance in px. */
  y?: number
}

/** Single element: fades + lifts into place when scrolled into view. */
export function ScrollReveal({ children, className, delay = 0, y = 20 }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

/** Container that reveals its <Stagger.Item> children in sequence. */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}

Stagger.Item = StaggerItem
