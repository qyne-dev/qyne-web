import type { ReactNode } from 'react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'
import {
  ConnectPanel,
  ReadPanel,
  ProposePanel,
  ApprovePanel,
} from '../visuals/ProcessPanels'
import { cn } from '../../lib/utils'

interface Step {
  n: string
  name: string
  body: string
  panel: ReactNode
}

const STEPS: Step[] = [
  {
    n: '01',
    name: 'Connect',
    body: 'Your athlete connects a Garmin, Apple Watch, WHOOP, or any Android wearable through Health Connect. No wearable? A 30-second morning check-in works just as well.',
    panel: <ConnectPanel />,
  },
  {
    n: '02',
    name: 'Read',
    body: 'Qyne reads HRV, sleep, resting heart rate, and training load — then confidence-weights every signal by the quality of the device it came from.',
    panel: <ReadPanel />,
  },
  {
    n: '03',
    name: 'Propose',
    body: 'A rules engine designed by certified S&C coaches turns those signals into a weekly training plan, tailored to each athlete’s readiness and workload.',
    panel: <ProposePanel />,
  },
  {
    n: '04',
    name: 'Approve',
    body: 'Your head coach reviews the squad and approves in about 15 minutes every Monday. Athletes train the week with a plan they can trust.',
    panel: <ApprovePanel />,
  },
]

export function Process() {
  return (
    <Section className="border-t border-border bg-surface">
      <SectionHeading
        eyebrow="How it works"
        title="Wearable data in. Coach-approved plans out."
      />

      <div className="mt-16 flex flex-col gap-20 lg:mt-20 lg:gap-28">
        {STEPS.map((step, i) => {
          const reversed = i % 2 === 1
          return (
            <div
              key={step.n}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <ScrollReveal className={cn(reversed && 'lg:order-2')}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[2.6rem] font-medium leading-none text-faint">
                    {step.n}
                  </span>
                  <span className="h-px w-10 bg-border" />
                  <span className="label text-faint">Step {step.n} / 04</span>
                </div>
                <h3 className="mt-5 text-[clamp(1.7rem,2.5vw,2.15rem)] font-medium tracking-tight text-ink">
                  {step.name}
                </h3>
                <p className="mt-3 max-w-md text-[16px] leading-[1.62] text-muted">
                  {step.body}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1} className={cn(reversed && 'lg:order-1')}>
                {step.panel}
              </ScrollReveal>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
