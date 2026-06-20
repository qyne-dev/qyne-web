import { Link } from 'react-router-dom'
import { Section } from '../components/primitives/Container'
import { buttonVariants } from '../components/primitives/Button'
import { Showcase } from '../components/visuals/Showcase'
import { CTA } from '../components/sections/CTA'
import { PageIntro } from '../components/sections/PageIntro'
import { Seo } from '../components/primitives/Seo'
import { cn } from '../lib/utils'

export default function Periodization() {
  return (
    <>
      <Seo
        title="Periodization — QYNE | Train. Adapt. Perform."
        description="QYNE's year-long periodization model for cricket: macro, meso and micro cycles that build volume, raise intensity and keep training load safe — peaking you at the right time."
        path="/periodization"
      />

      <PageIntro
        eyebrow="Periodization"
        title="Train. Adapt. Perform."
        subtitle="A year-long, data-driven plan that builds your base, sharpens your skill, and peaks you for the games that matter — without breaking you along the way."
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

      <Section className="border-t border-border">
        <div className="flex flex-col gap-20 lg:gap-28">
          <Showcase
            eyebrow="Year-long cycle"
            title="One plan. Four phases. Twelve months."
            body="Your year is mapped into four blocks, each with a clear job — so every week of training has a purpose that ladders up to peak performance."
            image="/periodization/year-map.jpeg"
            alt="QYNE year-long periodization map across GPP, SPP, PCP and in-season phases"
            points={[
              'GPP — foundation: build capacity & resilience',
              'SPP — development: build specificity & skill',
              'PCP — pre-competition: peak & prepare to perform',
              'In-season: perform, maintain and adapt',
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
            alt="Weekly microcycle structure for a cricketer across a five-week block"
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
            title="Cricket's demands shape the plan."
            body="QYNE profiles the energy systems your sport actually uses, then prioritizes them — for cricket, that means explosive power and high-intensity capacity first, with an aerobic base underneath."
            image="/periodization/energy-systems.jpeg"
            alt="Cricket energy-system profile driving periodization priorities"
            points={[
              'ATP-PC (power) and anaerobic capacity — high priority',
              'Aerobic base & lactate tolerance — supporting',
              'Mobility, stability & recovery — the foundation',
            ]}
          />

          <Showcase
            eyebrow="Skill periodization"
            title="Bowling and batting, periodized too."
            body="Skill work follows the same phased logic as physical training: build technique first, layer in variation and pressure, then sharpen for match performance — re-assessed every three months."
            image="/periodization/skill-periodization.jpeg"
            alt="Periodization of cricket skill training across phases for bowling and batting"
            points={[
              'Foundation → development → application → peak',
              'Separate tracks for bowling and batting',
              'Assess → analyze gaps → focus → re-assess',
            ]}
          />
        </div>
      </Section>

      <CTA />
    </>
  )
}
