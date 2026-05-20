import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

/** Centered content column with consistent responsive gutters. */
export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12', className)}>
      {children}
    </div>
  )
}

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  containerClassName?: string
  /** Skip the inner Container for full-bleed sections. */
  bleed?: boolean
}

/** A page section with standard vertical rhythm. */
export function Section({ children, className, id, containerClassName, bleed }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 sm:py-24 lg:py-32', className)}>
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}
