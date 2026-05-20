import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

/** The Qyne recovery-ring mark — references a wearable readiness ring. */
function RingMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn('shrink-0', className)}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" stroke="var(--color-border)" strokeWidth="2.6" />
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="var(--color-primary)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="37 13.3"
        transform="rotate(-90 12 12)"
      />
    </svg>
  )
}

/** Qyne logotype: ring mark + lowercase wordmark. Links home. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Qyne — home"
      className={cn(
        'group inline-flex items-center gap-2 transition-opacity hover:opacity-90',
        className,
      )}
    >
      <RingMark className="h-[22px] w-[22px]" />
      <span className="text-[19px] font-medium lowercase tracking-[-0.04em] text-ink">
        qyne
      </span>
    </Link>
  )
}
