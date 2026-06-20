import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Video, Dumbbell, Filter, Target, ArrowRight } from 'lucide-react'
import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

const POINTS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Video,
    title: '2000+ expert-led videos',
    body: 'Strength, power, agility, mobility and rehab — every exercise a science-backed demonstration.',
  },
  {
    icon: Dumbbell,
    title: 'See exactly which muscles work',
    body: 'Musculoskeletal animations break down primary movers, secondary movers and stabilizers.',
  },
  {
    icon: Filter,
    title: 'Smart performance filters',
    body: 'Filter by plane of motion, adaptation, contraction type, rehab need or sport — every filter purposeful.',
  },
  {
    icon: Target,
    title: 'Cricket skill drills',
    body: 'Batting, bowling, fielding and wicketkeeping drills with key coaching points and the same animations.',
  },
]

/** Landing-page teaser for the exercise library; links to /exercise-library. */
export function ExerciseLibrarySummary() {
  return (
    <Section className="border-t border-border bg-surface">
      <SectionHeading
        eyebrow="Exercise library"
        title="2000+ expert-led videos. Every one with a purpose."
        description="A science-backed library of exercises and cricket skills — muscle-level animations, expert cues and smart filters — so every athlete trains the right movement, the right way."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Points + link (left) */}
        <div>
          <ul className="flex flex-col gap-6">
            {POINTS.map((p) => (
              <li key={p.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-bg">
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
            to="/exercise-library"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Explore the exercise library
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Category showcase (right) */}
        <ScrollReveal>
          <div className="overflow-hidden rounded-xl border border-border bg-bg">
            <div className="bg-surface-2 p-1.5">
              <img
                src="/platform/exercise-categories.png"
                alt="Exercise categories — agility, mobility, speed-strength and strength-speed, each with 100+ videos"
                width={1496}
                height={523}
                loading="lazy"
                decoding="async"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
