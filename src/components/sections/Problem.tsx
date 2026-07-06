import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Section, Container } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { Card } from '../primitives/Card'
import { Stagger } from '../animations/ScrollReveal'

/* — Native stat illustrations, drawn in QYNE's dashboard chart language —
   Each maps a shared 96×48 frame and a single semantic colour to its problem:
   warning = guesswork, primary = the individual, danger = injury risk.        */

/** No-data gauge: a dashed, empty readiness dial with a needle left guessing. */
function GuessworkGauge() {
  return (
    <svg viewBox="0 0 96 48" className="h-full w-auto" fill="none" aria-hidden="true">
      {/* Empty dial track — dashed to read as "no signal" */}
      <path
        d="M8 46 A 40 40 0 0 1 88 46"
        stroke="var(--color-border)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 7"
      />
      {/* Needle — guessing, not measuring */}
      <path d="M48 46 L34 20" stroke="var(--color-warning)" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="48" cy="46" r="3" fill="var(--color-warning)" />
    </svg>
  )
}

/** One athlete highlighted in a crowd — the individual lost at scale. */
function ScaleDots() {
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
            r={highlight ? 4 : 2.4}
            fill={highlight ? 'var(--color-primary)' : 'var(--color-border)'}
          />
        )
      })}
      {/* Ring marks the one athlete a plan can actually reach (same cell as the highlight) */}
      <circle cx={(13 % cols) * 11 + 4} cy={Math.floor(13 / cols) * 11 + 4} r="7" stroke="var(--color-primary)" strokeWidth="1.2" fill="none" opacity="0.5" />
    </svg>
  )
}

/** Injury rate climbing — a rising trend toward a danger marker. */
function InjuryTrend() {
  const line = 'M2 42 L22 38 L40 33 L58 24 L76 13 L94 4'
  return (
    <svg viewBox="0 0 96 48" className="h-full w-auto" fill="none" aria-hidden="true">
      {/* Baseline gridline for chart context */}
      <line x1="2" y1="46" x2="94" y2="46" stroke="var(--color-border)" strokeWidth="1" />
      <path d={`${line} L94 48 L2 48 Z`} fill="var(--color-danger)" fillOpacity="0.1" />
      <path d={line} stroke="var(--color-danger)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="94" cy="4" r="3.4" fill="var(--color-danger)" />
    </svg>
  )
}

interface ProblemItem {
  illustration: ReactNode
  stat: string
  unit: string
  title: string
  body: string
  /** How QYNE closes this specific gap — ties the problem to the product. */
  answer: string
}

const PROBLEMS: ProblemItem[] = [
  {
    illustration: <GuessworkGauge />,
    stat: 'Feel',
    unit: 'over data',
    title: 'Most athletes train on feel.',
    body: 'Without readiness, load and assessment data, training is guesswork — effort goes in, but fatigue and injury risk stay invisible until it’s too late.',
    answer: 'A daily readiness score, from the wrist.',
  },
  {
    illustration: <ScaleDots />,
    stat: '50–500',
    unit: 'athletes per coach',
    title: 'One coach can’t individualise at scale.',
    body: 'A coach managing 50 to 500 athletes physically cannot write and adapt a personal, periodized plan for every body. The arithmetic simply doesn’t allow it.',
    answer: 'An adaptive plan for every athlete.',
  },
  {
    illustration: <InjuryTrend />,
    stat: '3×',
    unit: 'in a decade',
    title: 'Preventable injuries are climbing.',
    body: 'ACL tears and stress fractures in young athletes have roughly tripled in a decade — most of them load-management failures, not accidents.',
    answer: 'Injury-aware load, kept in the safe zone.',
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
          eyebrow="Why QYNE"
          title="Every sport produces talent. Few athletes get the intelligence to train it safely."
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

                {/* Bridge to the product — same answer slot aligns across cards */}
                <div className="mt-auto flex items-center gap-2 border-t border-border pt-5">
                  <span className="label shrink-0 text-primary">QYNE</span>
                  <ArrowRight size={13} className="shrink-0 text-primary" />
                  <span className="text-[13px] leading-[1.4] text-ink">{p.answer}</span>
                </div>
              </Card>
            </Stagger.Item>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
