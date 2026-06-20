import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { EASE } from '../animations/ScrollReveal'
import { cn } from '../../lib/utils'

/** Small-caps section label with a leading accent hairline that draws in. */
export function Eyebrow({
  children,
  className,
  tone = 'primary',
}: {
  children: ReactNode
  className?: string
  tone?: 'primary' | 'muted'
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: EASE }}
        className={cn('h-px w-7 origin-left', tone === 'primary' ? 'bg-primary' : 'bg-faint')}
      />
      <span className={cn('label', tone === 'primary' ? 'text-primary' : 'text-muted')}>
        {children}
      </span>
    </span>
  )
}
