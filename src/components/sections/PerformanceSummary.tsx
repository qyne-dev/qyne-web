import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Gauge, LineChart, Moon, Users, ArrowRight } from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'
import { PerformanceDashboard } from '../visuals/PerformanceDashboard'

const POINTS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Gauge,
    title: 'Readiness becomes today’s session',
    body: 'A morning readiness score sets the day’s goal and builds the session for it.',
  },
  {
    icon: LineChart,
    title: 'Training load & strain, injury-aware',
    body: 'Every kind of load in one currency, with acute:chronic strain kept in the safe zone.',
  },
  {
    icon: Moon,
    title: 'Nutrition & recovery, periodized',
    body: 'Fueling and recovery targets that move with your training load — backed by science.',
  },
  {
    icon: Users,
    title: 'One aligned team, coach-led',
    body: 'Your whole support team works from one view of the data — with the coach in control.',
  },
]

/** Landing-page teaser for the performance system; links to /performance. */
export function PerformanceSummary() {
  return (
    <Section className="border-t border-border">
      <SectionHeading
        eyebrow="Performance system"
        title="One system. One goal. Your best performance."
        description="Periodization is the plan — this is everything that makes it work: a daily readiness-to-session loop, plus nutrition, recovery and monitoring that move with your training."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Native dashboard (left) */}
        <ScrollReveal className="order-last lg:order-first">
          <PerformanceDashboard className="mx-auto w-full max-w-[440px]" />
        </ScrollReveal>

        {/* Points + link (right) */}
        <div>
          <ul className="flex flex-col gap-6">
            {POINTS.map((p) => (
              <li key={p.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-surface-2">
                  <p.icon size={17} className="text-primary" />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/performance"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Explore the performance system
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
