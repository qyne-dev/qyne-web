import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

/** Small-caps section label with a leading accent hairline. */
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
      <span className={cn('h-px w-7', tone === 'primary' ? 'bg-primary' : 'bg-faint')} />
      <span className={cn('label', tone === 'primary' ? 'text-primary' : 'text-muted')}>
        {children}
      </span>
    </span>
  )
}
