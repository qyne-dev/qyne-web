import { Link } from 'react-router-dom'
import { Logo } from '../primitives/Logo'
import { Container } from '../primitives/Container'
import { FOOTER_COLUMNS, SITE } from '../../lib/site'

/** Renders an internal route link or an external/mailto anchor. */
function FooterLink({ href, label }: { href: string; label: string }) {
  const className = 'text-sm text-muted transition-colors hover:text-ink'
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {label}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Strength &amp; conditioning, built for Indian sports academies.
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-wide text-faint">
              {SITE.locations}
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="label text-faint">{column.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-faint">
            © 2026 {SITE.legalName}
          </p>
          <p className="font-mono text-[11px] tracking-wide text-faint">
            Made in Bangalore
          </p>
        </div>
      </Container>
    </footer>
  )
}
