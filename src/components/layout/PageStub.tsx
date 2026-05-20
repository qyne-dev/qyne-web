import { Link } from 'react-router-dom'
import { Container } from '../primitives/Container'
import { Eyebrow } from '../primitives/Eyebrow'
import { buttonVariants } from '../primitives/Button'
import { Seo } from '../primitives/Seo'
import { cn } from '../../lib/utils'

/** Temporary placeholder for pages not yet built out. */
export function PageStub({
  name,
  path,
  blurb,
}: {
  name: string
  path: string
  blurb: string
}) {
  return (
    <>
      <Seo title={`${name} — Qyne`} description={blurb} path={path} />
      <section className="grid min-h-[80vh] place-items-center pt-16">
        <Container className="text-center">
          <Eyebrow tone="muted">In progress</Eyebrow>
          <h1 className="mt-5 text-[clamp(2.4rem,5vw,3.6rem)]">{name}</h1>
          <p className="mx-auto mt-4 max-w-md text-[17px] text-muted">{blurb}</p>
          <Link
            to="/"
            className={cn(buttonVariants({ variant: 'secondary' }), 'mt-8')}
          >
            Back to home
          </Link>
        </Container>
      </section>
    </>
  )
}
