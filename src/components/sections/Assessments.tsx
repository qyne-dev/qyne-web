import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { Stagger } from '../animations/ScrollReveal'

interface Assessment {
  image: string
  title: string
  body: string
  metrics: string[]
}

const ASSESSMENTS: Assessment[] = [
  {
    image: '/platform/04-jump-assessment.jpg',
    title: 'Jump assessments',
    body: 'CMJ, squat jump, depth jump and single-leg variants — captured with your phone, no force plate required.',
    metrics: ['Jump height', 'Flight time', 'Ground contact', 'RSI', 'Power', 'Take-off velocity'],
  },
  {
    image: '/platform/05-horizontal-jump.jpg',
    title: 'Force–velocity profile',
    body: 'Jump at different loads to build your full force–velocity profile and see exactly where training should focus.',
    metrics: ['F0', 'V0', 'Peak force', 'Relative power', 'Jump distance'],
  },
  {
    image: '/platform/06-barbell-assessment.jpg',
    title: 'Barbell velocity & 1RM',
    body: 'Track barbell velocity on any lift and predict 1RM from a load–velocity profile. Lift smarter, not just heavier.',
    metrics: ['Mean velocity', 'Peak power', 'Predicted 1RM', 'Velocity loss'],
  },
  {
    image: '/platform/07-running-analysis.jpg',
    title: 'Running analysis',
    body: 'Capture a side-view run and get stride mechanics, joint angles and form scores — all from a single video.',
    metrics: ['Stride length', 'Stride frequency', 'Running speed', 'Joint angles', 'Form'],
  },
  {
    image: '/platform/08-sprint-analysis.jpg',
    title: 'Sprint analysis',
    body: 'Break a sprint into phases and distances — top speed, acceleration and ground contact, measured with your phone.',
    metrics: ['Max velocity', 'Acceleration', 'Contact time', 'Leg stiffness', 'Reactive force'],
  },
  {
    image: '/platform/09-flexibility-mobility.jpg',
    title: 'Flexibility, mobility & deceleration',
    body: 'Measure any joint angle and run deceleration tests to quantify braking ability and injury risk.',
    metrics: ['Joint ROM', 'Max deceleration', 'Braking force', 'Time to stop'],
  },
]

export function Assessments() {
  return (
    <Section id="assessments" className="border-t border-border">
      <SectionHeading
        eyebrow="Assessments"
        title="Lab-grade testing, from a smartphone."
        description="Advanced performance assessments with real, objective metrics — no extra equipment. Every test feeds straight into the periodization engine."
      />

      <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
        {ASSESSMENTS.map((a) => (
          <Stagger.Item key={a.title} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-faint">
              <div className="border-b border-border bg-surface-2 p-1.5">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[1.25rem] font-medium tracking-tight text-ink">
                  {a.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.55] text-muted">{a.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {a.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[12px] text-faint"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Stagger.Item>
        ))}
      </Stagger>
    </Section>
  )
}
