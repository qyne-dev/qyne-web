import type { ReactNode } from 'react'
import { Section, Container } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { Card } from '../primitives/Card'
import { Stagger } from '../animations/ScrollReveal'

/* — Decorative stat illustrations — */

function CostBars() {
  const bars = [15, 23, 31, 43]
  return (
    <svg viewBox="0 0 96 48" className="h-full w-auto" fill="none" aria-hidden="true">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 23 + 5}
          y={48 - h}
          width="14"
          height={h}
          rx="2"
          fill={i === bars.length - 1 ? 'var(--color-warning)' : 'var(--color-border)'}
        />
      ))}
    </svg>
  )
}

function AthleteDots() {
  const cols = 9
  const rows = 4
  return (
    <svg viewBox={`0 0 ${cols * 11} ${rows * 11}`} className="h-full w-auto" aria-hidden="true">
      {Array.from({ length: rows * cols }).map((_, i) => {
        const highlight = i === 13
        return (
          <circle
            key={i}
            cx={(i % cols) * 11 + 4}
            cy={Math.floor(i / cols) * 11 + 4}
            r={highlight ? 3.6 : 2.4}
            fill={highlight ? 'var(--color-primary)' : 'var(--color-border)'}
          />
        )
      })}
    </svg>
  )
}

function InjuryLine() {
  const line = 'M2 42 L22 38 L40 33 L58 24 L76 13 L94 4'
  return (
    <svg viewBox="0 0 96 48" className="h-full w-auto" fill="none" aria-hidden="true">
      <path d={`${line} L94 48 L2 48 Z`} fill="var(--color-danger)" fillOpacity="0.09" />
      <path
        d={line}
        stroke="var(--color-danger)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="94" cy="4" r="3.2" fill="var(--color-danger)" />
    </svg>
  )
}

interface ProblemItem {
  illustration: ReactNode
  stat: string
  unit: string
  title: string
  body: string
}

const PROBLEMS: ProblemItem[] = [
  {
    illustration: <CostBars />,
    stat: 'Feel',
    unit: 'over data',
    title: 'Most cricketers train on feel.',
    body: 'Without readiness, load and assessment data, training is guesswork — effort goes in, but fatigue and injury risk stay invisible until it’s too late.',
  },
  {
    illustration: <AthleteDots />,
    stat: '50–500',
    unit: 'athletes per coach',
    title: 'One coach can’t individualise at scale.',
    body: 'A coach managing 50 to 500 athletes physically cannot write and adapt a personal, periodized plan for every body. The arithmetic simply doesn’t allow it.',
  },
  {
    illustration: <InjuryLine />,
    stat: '3×',
    unit: 'in a decade',
    title: 'Preventable injuries are climbing.',
    body: 'ACL tears and lumbar stress fractures in U-19 cricketers have roughly tripled in ten years — most of them load-management failures, not accidents.',
  },
]

export function Problem() {
  return (
    <Section bleed className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-40"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Qyne"
          title="Cricket produces the talent. Few athletes get the intelligence to train it safely."
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <Stagger.Item key={p.stat} className="h-full">
              <Card className="flex h-full flex-col p-7">
                <div className="flex h-14 items-end">{p.illustration}</div>
                <div className="mt-7 flex items-baseline gap-2">
                  <span className="font-mono text-[2.4rem] font-medium leading-none text-ink">
                    {p.stat}
                  </span>
                  <span className="text-[13px] text-faint">{p.unit}</span>
                </div>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.62] text-muted">{p.body}</p>
              </Card>
            </Stagger.Item>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
