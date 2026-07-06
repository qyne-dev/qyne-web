import { ClipboardCheck, CalendarRange, Dumbbell, TrendingUp } from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { Stagger } from '../animations/ScrollReveal'

// The five-phase skill-based periodization block — build technique, layer skill,
// simulate the game, peak, then maintain.
const PHASES: { name: string; weeks: string; focus: string; intensity: number }[] = [
  { name: 'Prepare', weeks: 'Weeks 1–4', focus: 'Technique foundation', intensity: 1 },
  { name: 'Develop', weeks: 'Weeks 5–12', focus: 'Skill development', intensity: 2 },
  { name: 'Perform', weeks: 'Weeks 13–20', focus: 'Game simulation', intensity: 3 },
  { name: 'Peak', weeks: 'Weeks 21–24', focus: 'Peak performance', intensity: 4 },
  { name: 'Maintain', weeks: 'Weeks 25+', focus: 'Maintain & adapt', intensity: 2 },
]

// The end-to-end flow from assessment to peak.
const FLOW = [
  { icon: ClipboardCheck, label: 'Assess & analyze' },
  { icon: CalendarRange, label: 'Skill periodization' },
  { icon: Dumbbell, label: 'Drills & training' },
  { icon: TrendingUp, label: 'Peak performance' },
]

const SKILL_AREAS = ['Technique', 'Timing', 'Decision making', 'Consistency', 'Game awareness']

/** Intensity meter — four cells, filled to the phase's level. */
function Intensity({ level }: { level: number }) {
  return (
    <div className="mt-4 flex gap-1" aria-hidden>
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={
            'h-1.5 flex-1 rounded-full ' + (i <= level ? 'bg-primary' : 'bg-border')
          }
        />
      ))}
    </div>
  )
}

/** Skill-based periodization: the five phases, the flow, and the skill areas tracked. */
export function PhaseTimeline() {
  return (
    <Section className="border-t border-border">
      <SectionHeading
        eyebrow="Skill-based periodization"
        title="Five phases. Peak on purpose."
        description="Skill work is periodized like physical training: build technique first, layer in variation and pressure, simulate the game, sharpen to peak, then maintain — re-assessed as you go, for any sport."
      />

      {/* The flow from assessment to peak */}
      <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-3">
        {FLOW.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-md border border-border bg-bg px-3 py-2">
              <step.icon size={15} className="text-primary" />
              <span className="text-[13px] text-ink">{step.label}</span>
            </span>
            {i < FLOW.length - 1 && <span className="text-faint">→</span>}
          </div>
        ))}
      </div>

      {/* Phase cards */}
      <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {PHASES.map((p) => (
          <Stagger.Item key={p.name}>
            <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-5">
              <span className="label text-faint">{p.weeks}</span>
              <h3 className="mt-2 text-[18px] font-medium tracking-tight text-ink">{p.name}</h3>
              <p className="mt-1 text-[13px] leading-[1.5] text-muted">{p.focus}</p>
              <Intensity level={p.intensity} />
              <span className="mt-2 text-[10px] uppercase tracking-wide text-faint">Intensity</span>
            </div>
          </Stagger.Item>
        ))}
      </Stagger>

      {/* Key skill areas tracked across the plan */}
      <div className="mt-10">
        <span className="label text-faint">Key skill areas</span>
        <ul className="mt-3 flex flex-wrap gap-2">
          {SKILL_AREAS.map((s) => (
            <li
              key={s}
              className="rounded-md border border-border bg-bg px-3 py-1.5 text-[13px] text-ink"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
