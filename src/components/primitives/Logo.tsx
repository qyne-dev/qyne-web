import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

/** QYNE logotype: wordmark only for now (brand mark TBD). Links home. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="QYNE — home"
      className={cn(
        'group inline-flex items-center transition-opacity hover:opacity-90',
        className,
      )}
    >
      <span className="text-[19px] font-medium tracking-[-0.02em] text-ink">
        QYNE
      </span>
    </Link>
  )
}
