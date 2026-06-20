import type { ReactNode } from 'react'
import { Container } from '../primitives/Container'
import { Eyebrow } from '../primitives/Eyebrow'
import { Seo } from '../primitives/Seo'
import { ScrollReveal } from '../animations/ScrollReveal'

export interface TocItem {
  id: string
  label: string
}

interface LegalPageProps {
  eyebrow: string
  title: string
  intro: string
  path: string
  meta?: { effective?: string; version?: string }
  toc: TocItem[]
  children: ReactNode
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  path,
  meta,
  toc,
  children,
}: LegalPageProps) {
  return (
    <>
      <Seo title={`${title} — QYNE`} description={intro} path={path} />

      <section className="relative overflow-hidden border-b border-border pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div
          aria-hidden
          className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-40"
        />
        <Container className="relative">
          <ScrollReveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[1.05] tracking-[-0.025em]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-[1.6] text-muted">
              {intro}
            </p>
            {meta && (
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 font-mono text-[11px] tracking-wide text-faint">
                {meta.effective && <span>Effective: {meta.effective}</span>}
                {meta.version && <span>Version: {meta.version}</span>}
              </div>
            )}
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="label text-faint">On this page</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-[13px] leading-snug text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="max-w-2xl space-y-14">{children}</div>
          </div>
        </Container>
      </section>
    </>
  )
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-[1.5rem] font-medium tracking-tight text-ink">{title}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-[1.72] text-muted [&_a]:text-primary [&_a:hover]:text-primary-light [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-medium [&_strong]:text-ink">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5 [&>li]:list-disc [&>li]:marker:text-faint">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}
