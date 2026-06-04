import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'
import { ScrollReveal } from '../animations/ScrollReveal'
import { cn } from '../../lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

/** Standard eyebrow + h2 + description block, revealed on scroll. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <ScrollReveal
      className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-balance text-[clamp(2.15rem,3.8vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[17px] leading-[1.6] text-muted">{description}</p>
      )}
    </ScrollReveal>
  )
}
