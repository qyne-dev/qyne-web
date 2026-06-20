import { Link } from 'react-router-dom'
import { Section } from '../components/primitives/Container'
import { buttonVariants } from '../components/primitives/Button'
import { Showcase } from '../components/visuals/Showcase'
import { CTA } from '../components/sections/CTA'
import { PageIntro } from '../components/sections/PageIntro'
import { Seo } from '../components/primitives/Seo'
import { cn } from '../lib/utils'

export default function Performance() {
  return (
    <>
      <Seo
        title="Performance system — QYNE | Aligned. Scientific. Injury-free."
        description="The complete QYNE performance system: an aligned expert team, a daily readiness-to-plan loop, coach workflow, nutrition and recovery periodization, and built-in athlete safeguards."
        path="/performance"
      />

      <PageIntro
        eyebrow="Performance system"
        title="One system. One goal. Your best performance."
        subtitle="Periodization is the plan — this is everything that makes it work: an aligned expert team, a daily data-to-decision loop, and nutrition, recovery and monitoring that move with your training."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/#demo" className={cn(buttonVariants({ size: 'lg' }))}>
            Request a demo
          </Link>
          <Link
            to="/periodization"
            className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}
          >
            See the periodization model
          </Link>
        </div>
      </PageIntro>

      <Section className="border-t border-border">
        <div className="flex flex-col gap-20 lg:gap-28">
          <Showcase
            eyebrow="Aligned team"
            title="Your whole support team, on the same page."
            body="A sports-science engine keeps your S&C coach, skill coach, nutritionist and physio working from one 360° view of your data — so every decision points at the same goal."
            image="/periodization/ecosystem.jpeg"
            alt="QYNE aligned expert team powered by a sports-science and periodization engine"
            points={[
              '360° athlete data: load, recovery, movement, wellness',
              'Plan → load → monitor → adjust → adapt → supercompensate',
              'Peak at the right time, injury-free',
            ]}
          />

          <Showcase
            reversed
            eyebrow="The daily loop"
            title="Your readiness becomes today's session."
            body="Every morning QYNE scores how ready you are to train, sets the day's goal, and hands you a session built for it — with live physiological metrics as you go."
            image="/periodization/todays-workout.jpeg"
            alt="Today's workout screen with readiness-to-train score and the day's plan"
            points={[
              'Readiness from sleep, HRV, fatigue and stress',
              'A clear focus and a built session for the day',
              'Live heart rate, HRV, load and recovery',
            ]}
          />

          <Showcase
            eyebrow="Load & strain"
            title="See your training load over time."
            body="Physiological, strength, running, sprint and agility load are normalized into one currency, with acute:chronic strain tracked so overload surfaces before it becomes injury."
            image="/periodization/athlete-load.jpeg"
            alt="Athlete view quantifying training load and acute:chronic strain over time"
            points={[
              'All load types in one comparable unit',
              'Acute:chronic strain with safe-zone bands',
              'Micro-cycle breakdown, day by day',
            ]}
          />

          <Showcase
            reversed
            eyebrow="Coach workflow"
            title="Data to decisions to development."
            body="Coaches get a recommended session from the athlete's data, can tweak or approve it, then review the completed session with video and physiological context — and share feedback instantly."
            image="/periodization/coach-workflow.jpeg"
            alt="Coach workflow from data inputs to daily recommendation to feedback"
            points={[
              'Recommended sessions from readiness & history',
              'Use, modify or swap — the coach stays in control',
              'Video analysis, voice-over and shared feedback',
            ]}
          />

          <Showcase
            eyebrow="Nutrition"
            title="Fuel that matches the phase."
            body="Daily targets, post-training windows and AI recipe suggestions shift with your training load and goals — built around local, available ingredients."
            image="/periodization/nutrition.jpeg"
            alt="Nutrition periodization with daily targets, recovery windows and AI recipes"
            points={[
              'Macro & micro targets personalized to load',
              'Post-session fueling windows',
              'AI recipes from your local cuisine',
            ]}
          />

          <Showcase
            reversed
            eyebrow="Recovery"
            title="Recovery, backed by science."
            body="Research-led recovery — sleep, nutrition, and modalities from cold therapy to mobility — with the option to book trusted clinics when you need hands-on support."
            image="/periodization/recovery-science.jpeg"
            alt="Science-based recovery recommendations and partner booking"
            points={[
              'Sleep and nutrition for recovery',
              'Evidence-based modalities & research feed',
              'Book physio, massage and recovery sessions',
            ]}
          />

          <Showcase
            eyebrow="Safeguards"
            title="Smarter training. Safer athletes."
            body="Growth and maturation (PHV) awareness, menstrual-cycle-based optimization, and injury & movement screening adjust the plan automatically — protecting young and developing athletes."
            image="/periodization/athlete-monitoring.jpeg"
            alt="Growth, menstrual health and injury & movement screening monitoring"
            points={[
              'Peak-height-velocity-aware load management',
              'Cycle-based training optimization',
              'Movement screening with corrective exercises',
            ]}
          />

          <Showcase
            reversed
            eyebrow="The journey"
            title="From onboarding to optimal performance."
            body="Set your goals, complete a 360° assessment, let the data combine into a profile, design your periodized plan, then execute, monitor and adapt — one continuous loop."
            image="/periodization/onboarding-to-performance.jpeg"
            alt="The QYNE journey from onboarding and assessment to periodized execution"
            points={[
              'Goals → assessments → integrate → design → execute',
              'Wearables, biomarkers and questionnaires combined',
              'Right plan, right time, right results',
            ]}
          />
        </div>
      </Section>

      <CTA />
    </>
  )
}
