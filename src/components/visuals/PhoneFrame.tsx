import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface PhoneFrameProps {
  children: ReactNode
  /** Applied to the outer positioning wrapper — set width/margins here. */
  className?: string
  /** Applied to the inner screen surface. */
  screenClassName?: string
}

/** Reusable phone bezel with notch and a soft brand glow. Children fill the screen. */
export function PhoneFrame({ children, className, screenClassName }: PhoneFrameProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Soft brand glow behind the device */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-primary/12 blur-3xl"
      />

      {/* Bezel */}
      <div className="relative rounded-[2.6rem] border border-border bg-surface-2 p-2.5 shadow-2xl shadow-black/40">
        {/* Screen */}
        <div
          className={cn(
            'relative overflow-hidden rounded-[2.1rem] border border-border bg-bg',
            screenClassName,
          )}
        >
          {/* Notch */}
          <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-surface-2" />
          {children}
        </div>
      </div>
    </div>
  )
}
