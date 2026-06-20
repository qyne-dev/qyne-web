import { Link } from 'react-router-dom'
import { Section } from '../components/primitives/Container'
import { buttonVariants } from '../components/primitives/Button'
import { Showcase } from '../components/visuals/Showcase'
import { CTA } from '../components/sections/CTA'
import { PageIntro } from '../components/sections/PageIntro'
import { Seo } from '../components/primitives/Seo'
import { cn } from '../lib/utils'

export default function ExerciseLibrary() {
  return (
    <>
      <Seo
        title="Exercise library — QYNE | 2000+ expert-led videos"
        description="QYNE's library of 2000+ science-backed exercise videos, musculoskeletal movement guides, smart search filters, cricket skill drills and training concepts."
        path="/exercise-library"
      />

      <PageIntro
        eyebrow="Exercise library"
        title="2000+ expert-led videos. Every one with a purpose."
        subtitle="A science-backed library of exercises and cricket skills — with muscle-level animations, expert cues and smart filters — so every athlete trains the right movement, the right way."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/#demo" className={cn(buttonVariants({ size: 'lg' }))}>
            Request a demo
          </Link>
          <Link
            to="/periodization"
            className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}
          >
            See how it's programmed
          </Link>
        </div>
      </PageIntro>

      <Section className="border-t border-border">
        <div className="flex flex-col gap-20 lg:gap-28">
          <Showcase
            eyebrow="Video database"
            title="Browse 2000+ exercises by focus."
            body="From strength and power to mobility and rehab, every exercise is an expert demonstration — searchable by name, muscle group or modality."
            image="/periodization/exercise-db.jpeg"
            alt="QYNE exercise video database with 2000+ videos organized by focus area"
            points={[
              '12 focus areas — strength, power, agility, mobility & more',
              'Expert-led, science-backed demonstrations',
              'Search by name, muscle group or modality',
            ]}
          />

          <Showcase
            reversed
            eyebrow="Movement guide"
            title="See exactly which muscles work."
            body="Musculoskeletal animations break down each lift — primary movers, secondary movers and stabilizers — with step-by-step movement patterns, expert cues and voice-over guidance."
            image="/periodization/movement-guide.jpeg"
            alt="Musculoskeletal animation and movement guide for an exercise with muscle breakdown"
            points={[
              'Primary, secondary and stabilizer muscle breakdown',
              'Step-by-step movement pattern',
              'Expert cues and clear voice-over',
            ]}
          />

          <Showcase
            eyebrow="Smart filters"
            title="Find the right exercise for the right goal."
            body="Narrow the library by plane of motion, laterality, muscle focus, training adaptation, contraction type, rehab need or sport — every filter is performance-driven."
            image="/periodization/smart-filters.jpeg"
            alt="Smart search filters for the exercise database across many performance dimensions"
            points={[
              'Planes of motion, laterality and movement pattern',
              'Training adaptation, contraction type, special qualities',
              'Rehab, return-to-play and sport-specific filters',
            ]}
          />

          <Showcase
            reversed
            eyebrow="Cricket skills"
            title="World-class coaches. Proven drills."
            body="A dedicated cricket skill library — batting, bowling, fielding, wicketkeeping and game awareness — with drill detail, key coaching points and the same muscle-level animation."
            image="/periodization/skill-videos.jpeg"
            alt="Cricket skill video database with batting and bowling drills and animations"
            points={[
              'Batting, bowling, fielding & wicketkeeping drills',
              'Purpose, key points and equipment per drill',
              'Filter by skill level, shot/delivery type and more',
            ]}
          />

          <Showcase
            eyebrow="Training concepts"
            title="The science, made usable."
            body="Beyond videos, QYNE teaches the concepts behind the work — tri-phasic training, post-activation potentiation, periodization models — and covers the full range of tools and equipment."
            image="/periodization/training-concepts.jpeg"
            alt="Training concepts and tools — tri-phasic training, PAP, periodization models and equipment"
            points={[
              'Tri-phasic training and post-activation potentiation',
              'Linear, undulating, block and conjugate models',
              'Tools from kettlebells to sleds, explained',
            ]}
          />
        </div>
      </Section>

      <CTA />
    </>
  )
}
