import type { ReactNode } from 'react'
import { Eyebrow } from '../primitives/Eyebrow'
import { ScrollReveal } from '../animations/ScrollReveal'
import { cn } from '../../lib/utils'

/**
 * Frames a light-background product slide so it sits cleanly on the dark theme —
 * reads as a bordered screenshot with a soft drop shadow.
 */
export function ImageFrame({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-surface-2 p-1.5 shadow-2xl shadow-black/50',
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full rounded-lg"
      />
    </div>
  )
}

interface ShowcaseProps {
  eyebrow: string
  title: ReactNode
  body: ReactNode
  image: string
  alt: string
  /** Bullet points rendered under the body copy. */
  points?: string[]
  /** Place the image on the left instead of the right. */
  reversed?: boolean
  children?: ReactNode
}

/** Alternating copy / framed-image row used across the Platform page. */
export function Showcase({
  eyebrow,
  title,
  body,
  image,
  alt,
  points,
  reversed,
  children,
}: ShowcaseProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <ScrollReveal className={cn(reversed && 'lg:order-2')}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="mt-5 text-balance text-[clamp(1.7rem,2.8vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.025em]">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-[16px] leading-[1.62] text-muted">{body}</p>
        {points && (
          <ul className="mt-6 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {p}
              </li>
            ))}
          </ul>
        )}
        {children}
      </ScrollReveal>

      <ScrollReveal delay={0.1} className={cn(reversed && 'lg:order-1')}>
        <ImageFrame src={image} alt={alt} />
      </ScrollReveal>
    </div>
  )
}
