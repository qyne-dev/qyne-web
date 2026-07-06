import { Link } from 'react-router-dom'
import { Section } from '../components/primitives/Container'
import { buttonVariants } from '../components/primitives/Button'
import { Showcase } from '../components/visuals/Showcase'
import { PhaseTimeline } from '../components/sections/PhaseTimeline'
import { CTA } from '../components/sections/CTA'
import { PageIntro } from '../components/sections/PageIntro'
import { Seo } from '../components/primitives/Seo'
import { cn } from '../lib/utils'

export default function Periodization() {
  return (
    <>
      <Seo
        title="Periodization — QYNE | Smarter skills. Peak performance. Injury free."
        description="QYNE's skill-based periodization: a data-driven plan across five phases — prepare, develop, perform, peak and maintain — that builds technique, raises intensity and keeps training load safe, for any sport."
        path="/periodization"
      />

      <PageIntro
        eyebrow="Skill-based periodization"
        title="Smarter skills. Peak performance. Injury free."
        subtitle="A data-driven plan that builds your base, sharpens your skill and peaks you for the games that matter — across five phases, for any sport, without breaking you along the way."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/#demo" className={cn(buttonVariants({ size: 'lg' }))}>
            Request a demo
          </Link>
          <Link
            to="/performance"
            className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}
          >
            See the full system
          </Link>
        </div>
      </PageIntro>

      <PhaseTimeline />

      <Section className="border-t border-border">
        <div className="flex flex-col gap-20 lg:gap-28">
          <Showcase
            eyebrow="Year-long cycle"
            title="One plan. Five phases. Twelve months."
            body="Your year is mapped into clear blocks, each with a single job — so every week of training has a purpose that ladders up to peak performance, then holds it."
            image="/periodization/year-map.jpeg"
            alt="QYNE year-long skill-based periodization map across prepare, develop, perform, peak and maintain phases"
            points={[
              'Prepare & develop — build technique, capacity and skill',
              'Perform — game simulation under pressure',
              'Peak — sharpen for the competitions that matter',
              'Maintain — hold form, adapt and re-assess',
            ]}
          />

          <Showcase
            reversed
            eyebrow="The model"
            title="Volume builds. Intensity rises. Strain stays safe."
            body="Across the year, training volume and intensity climb and taper on purpose, while the acute:chronic workload ratio is held in the safe zone — the science behind a measured +18% performance gain."
            image="/periodization/model-overview.jpeg"
            alt="Training variation across phases — volume, intensity and acute:chronic strain curves"
            points={[
              'Volume (total load) — accumulate, then taper',
              'Intensity (% of 1RM / max effort) — progressive build',
              'Strain (A:C ratio) — kept between 0.8 and 1.5',
            ]}
          />

          <Showcase
            eyebrow="Structure"
            title="Macrocycles, mesocycles, microcycles."
            body="Phases (macro) break into 3–6 week blocks (meso), which break into weeks (micro). The plan is dynamic — it adjusts to your performance, feedback and readiness as the year unfolds."
            image="/periodization/dashboard.jpeg"
            alt="Periodization dashboard showing macro, meso and micro cycle structure with progress to goal"
            points={[
              'Accumulation → intensification → realization → peak',
              'Progress-to-goal tracking against your goal date',
              'Re-assessed every three mesocycles',
            ]}
          />

          <Showcase
            reversed
            eyebrow="The training week"
            title="A balanced week: skill, training, rest."
            body="Each microcycle blends four skill sessions, three to four training sessions and a rest day. Five weeks form a block that builds, peaks, then deloads — so adaptation compounds and fatigue clears."
            image="/periodization/microcycle.jpeg"
            alt="Weekly microcycle structure for an athlete across a five-week block"
            points={[
              '4 skill + 3–4 training + 1 rest per week',
              'Build → build → peak → deload → recovery',
              'Progressive overload, then a smart deload',
            ]}
          />

          <Showcase
            eyebrow="Daily decisions"
            title="Readiness decides today's load."
            body="Wearable and check-in data feed a readiness score every morning. When you're recovered, the plan pushes; when you're not, it backs off — so hard days land when your body can take them."
            image="/periodization/microcycle-hiit.jpeg"
            alt="Data-driven readiness score and training decision engine for daily sessions"
            points={[
              'HRV, resting HR, sleep and RPE → readiness score',
              'Recommends, holds or scales each session',
              'Train hard on green days, recover on red',
            ]}
          />

          <Showcase
            reversed
            eyebrow="Energy systems"
            title="Your sport's demands shape the plan."
            body="QYNE profiles the energy systems your sport actually uses, then prioritizes them — for a power sport like cricket, that means explosive power and high-intensity capacity first, with an aerobic base underneath."
            image="/periodization/energy-systems.jpeg"
            alt="Sport-specific energy-system profile driving periodization priorities"
            points={[
              'ATP-PC (power) and anaerobic capacity — high priority',
              'Aerobic base & lactate tolerance — supporting',
              'Mobility, stability & recovery — the foundation',
            ]}
          />

          <Showcase
            eyebrow="Skill periodization"
            title="Sport skills, periodized too."
            body="Skill work follows the same phased logic as physical training: build technique first, layer in variation and pressure, then sharpen for match performance — re-assessed as you progress. Phase 1 covers cricket's bowling and batting, with more sports on the way."
            image="/periodization/skill-periodization.jpeg"
            alt="Periodization of sport skill training across prepare, develop, perform and peak phases"
            points={[
              'Technique → timing → decision-making → game awareness',
              'Sport-specific skill tracks (bowling & batting in cricket)',
              'Assess → analyze gaps → focus → re-assess',
            ]}
          />
        </div>
      </Section>

      <CTA />
    </>
  )
}
