import type { ReactNode } from 'react'
import { Container } from '../primitives/Container'
import { Eyebrow } from '../primitives/Eyebrow'
import { ScrollReveal } from '../animations/ScrollReveal'

/** Standard page header used by the secondary content pages. */
export function PageIntro({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string
  title: ReactNode
  subtitle: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div
        aria-hidden
        className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-30"
      />
      <Container className="relative">
        <ScrollReveal className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-balance text-[clamp(2.4rem,5.4vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-[1.6] text-muted">
            {subtitle}
          </p>
          {children}
        </ScrollReveal>
      </Container>
    </section>
  )
}
