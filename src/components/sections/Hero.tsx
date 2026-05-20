import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '../primitives/Container'
import { buttonVariants } from '../primitives/Button'
import { DashboardPreview } from '../visuals/DashboardPreview'
import { EASE } from '../animations/ScrollReveal'
import { TRUST_ACADEMIES } from '../../lib/site'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-28 lg:py-32">
      {/* Hairline grid texture, faded toward the edges */}
      <div
        aria-hidden
        className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-60"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left — message */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="label text-muted">
                  Onboarding academies in Bangalore &amp; Hyderabad
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-balance text-[clamp(2.6rem,6.4vw,5.75rem)] font-medium leading-[1.04] tracking-[-0.03em]"
            >
              The S&amp;C department your academy can’t afford to hire.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-[34rem] text-[17px] leading-[1.6] text-muted sm:text-[18px]"
            >
              Qyne generates coach-approved training plans for cricket and
              badminton academies in India.{' '}
              <span className="text-ink">
                Wearable-driven. Coach-led. Built for serious athletes.
              </span>
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="/#demo" className={buttonVariants({ size: 'lg' })}>
                Request a demo
              </Link>
              <Link
                to="/how-it-works"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                See how it works
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            <motion.div variants={item} className="mt-12 border-t border-border pt-6">
              <p className="label text-faint">
                Trusted by 3 academies in Bangalore &amp; Hyderabad
              </p>
              <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-2.5">
                {TRUST_ACADEMIES.map((name, i) => (
                  <span key={name} className="flex items-center gap-x-5">
                    {i > 0 && (
                      <span aria-hidden className="hidden h-3 w-px bg-border sm:block" />
                    )}
                    <span className="text-[13px] font-medium tracking-tight text-muted">
                      {name}
                    </span>
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — animated dashboard */}
          <div className="lg:pl-4">
            <DashboardPreview />
          </div>
        </div>
      </Container>
    </section>
  )
}
