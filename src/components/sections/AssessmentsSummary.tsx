import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Smartphone, BarChart3, BrainCircuit, ArrowRight } from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

const POINTS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Smartphone,
    title: 'No lab, no force plate',
    body: 'CMJ, sprint, barbell velocity, running and mobility — measured from a single phone video.',
  },
  {
    icon: BarChart3,
    title: 'Real, objective metrics',
    body: 'Jump height, RSI, force–velocity profile, predicted 1RM, joint angles — quantified, not guessed.',
  },
  {
    icon: BrainCircuit,
    title: 'Feeds the periodization engine',
    body: 'Every result tunes your plan automatically — testing and training stay in one loop.',
  },
]

// A taste of the test library — the full set lives on /assessments.
const TESTS = ['Jump', 'Force–velocity', 'Barbell velocity', 'Running', 'Sprint', 'Mobility']

/** Landing-page teaser for assessments; links to the full /assessments page. */
export function AssessmentsSummary() {
  return (
    <Section id="assessments" className="border-t border-border">
      <SectionHeading
        eyebrow="Assessments"
        title="Lab-grade testing, from a smartphone."
        description="Turn your phone camera into a performance lab — real, objective metrics with no extra equipment, fed straight into the engine that builds your plan."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Capture — record the movement on your phone (cut-out, no backdrop) */}
        <ScrollReveal className="order-last lg:order-first">
          <img
            src="/platform/assess-capture-cut.png"
            alt="Recording a jump test on a phone — jump height measured frame by frame"
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-[300px]"
          />
        </ScrollReveal>

        {/* Points + test categories + link */}
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

          <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
            {TESTS.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[12px] text-faint"
              >
                {t}
              </span>
            ))}
          </div>

          <Link
            to="/assessments"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Explore assessments
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

    </Section>
  )
}
