import { Link } from 'react-router-dom'
import { Container } from '../components/primitives/Container'
import { Eyebrow } from '../components/primitives/Eyebrow'
import { buttonVariants } from '../components/primitives/Button'
import { Seo } from '../components/primitives/Seo'
import { cn } from '../lib/utils'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found — QYNE"
        description="The page you were looking for doesn't exist."
        path="/404"
      />
      <section className="grid min-h-[80vh] place-items-center pt-16">
        <Container className="text-center">
          <Eyebrow tone="muted">Error 404</Eyebrow>
          <h1 className="mt-5 text-[clamp(2.4rem,5vw,3.6rem)]">
            This page isn’t on the roster.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[17px] text-muted">
            The page you were looking for doesn’t exist or has moved.
          </p>
          <Link to="/" className={cn(buttonVariants(), 'mt-8')}>
            Back to home
          </Link>
        </Container>
      </section>
    </>
  )
}
