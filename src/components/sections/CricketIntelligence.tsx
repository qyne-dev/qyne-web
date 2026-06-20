import { Section } from '../primitives/Container'
import { SectionHeading } from '../primitives/SectionHeading'
import { Showcase } from '../visuals/Showcase'

export function CricketIntelligence() {
  return (
    <Section id="cricket" className="border-t border-border bg-surface">
      <SectionHeading
        eyebrow="Computer vision"
        title="From one video, the whole game."
        description="Point a phone at the nets and QYNE breaks the action down — bowling, ball flight, batting and athlete comparison, frame by frame."
      />

      <div className="mt-16 flex flex-col gap-20 lg:gap-28">
        <Showcase
          eyebrow="Bowling"
          title="Bowling biomechanics from a single side-view."
          body="A 2D side-view breaks the action into jump, back-foot contact, front-foot contact and follow-through — with joint angles and release metrics at every phase."
          image="/platform/10-bowling-assessment.jpg"
          alt="Cricket bowling assessment — 2D side-view biomechanics with joint angles"
          points={[
            'Ball release speed, shoulder speed and braking force',
            'Joint angles at shoulder, elbow, hip, knee and ankle',
            'Phase-by-phase velocity and shoulder-movement profiles',
          ]}
        />

        <Showcase
          reversed
          eyebrow="Ball tracking"
          title="Hawk-eye tracking and stump-impact prediction."
          body="Back-side view plus ball tracking predicts the line, length and stump impact — then quantifies the bowler's skill and prescribes the drills to improve it."
          image="/platform/11-bowling-analysis.jpg"
          alt="Bowling analysis with Hawk-eye ball tracking, pitch map and stump impact prediction"
          points={[
            'Pitch map, swing angle and bounce height',
            'Stump-impact prediction with confidence score',
            'Skill quantification across accuracy, consistency and variation',
          ]}
        />

        <Showcase
          eyebrow="Comparison"
          title="Superimpose, sync and compare any two actions."
          body="Overlay an athlete against a reference — or their own earlier self — frame-synced across every phase, with a movement-similarity score and per-joint alignment."
          image="/platform/12-movement-comparison.jpg"
          alt="Movement superimposition and comparison of two bowling actions with similarity score"
          points={[
            'Phase-matched superimposition of two athletes',
            'Overall movement-similarity and per-joint alignment',
            'Pre/post comparison to measure corrective progress',
          ]}
        />

        <Showcase
          reversed
          eyebrow="Batting"
          title="Batswing and shot analysis, shot by shot."
          body="Measure bat speed, impact point and smash factor, map shots around the ground, and turn the weaknesses into a skill-based periodized plan."
          image="/platform/13-batswing-analysis.jpg"
          alt="Batswing and shot analysis — bat speed, impact point, shot map and skill score"
          points={[
            'Bat speed, ball speed, smash factor and impact point',
            'Shot map across off, straight and leg side',
            'AI coach feedback and skill-based periodization',
          ]}
        />
      </div>
    </Section>
  )
}
