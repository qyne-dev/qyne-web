import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { Card } from '../primitives/Card'
import { Stagger, ScrollReveal } from '../animations/ScrollReveal'
import { RosterMock, WorkloadMock, ReportMock } from '../visuals/AcademyMocks'

interface Feature {
  mock: ReactNode
  label: string
  title: string
  body: string
}

const FEATURES: Feature[] = [
  {
    mock: <RosterMock />,
    label: 'Monday roster',
    title: 'See the whole squad at a glance.',
    body: 'Every athlete’s readiness, sorted and colour-coded, the moment you open Monday morning.',
  },
  {
    mock: <WorkloadMock />,
    label: 'Workload',
    title: 'Catch overload before it turns into injury.',
    body: 'Acute-to-chronic workload across every bowler, with the safe zone marked. Outliers surface themselves.',
  },
  {
    mock: <ReportMock />,
    label: 'Parent reports',
    title: 'Keep parents informed, automatically.',
    body: 'A clear monthly PDF on training, recovery, and load — generated for every athlete, no admin time.',
  },
]

export function AcademiesPreview() {
  return (
    <Section className="border-t border-border bg-surface">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="For academies"
          title="Built for the way Indian academies actually run."
        />
        <ScrollReveal>
          <Link
            to="/for-academies"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Everything for academies
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </ScrollReveal>
      </div>

      <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
        {FEATURES.map((f) => (
          <Stagger.Item key={f.label} className="h-full">
            <Card className="flex h-full flex-col p-5">
              {f.mock}
              <div className="mt-5 px-1 pb-1">
                <span className="label text-primary">{f.label}</span>
                <h3 className="mt-2.5 text-[1.18rem] font-medium tracking-tight text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-muted">{f.body}</p>
              </div>
            </Card>
          </Stagger.Item>
        ))}
      </Stagger>
    </Section>
  )
}
