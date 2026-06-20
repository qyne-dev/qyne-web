import { Link } from 'react-router-dom'
import { buttonVariants } from '../components/primitives/Button'
import { PageIntro } from '../components/sections/PageIntro'
import { CricketIntelligence as CricketAnalyses } from '../components/sections/CricketIntelligence'
import { CTA } from '../components/sections/CTA'
import { Seo } from '../components/primitives/Seo'
import { cn } from '../lib/utils'

/**
 * The full cricket-intelligence story:
 *   1. PageIntro — what computer-vision analysis means for the sport
 *   2. CricketAnalyses — the four detailed lenses (bowling, tracking, comparison, batting)
 *   3. CTA
 */
export default function CricketIntelligencePage() {
  return (
    <>
      <Seo
        title="Cricket intelligence — QYNE | Biomechanics from video"
        description="Computer-vision analysis purpose-built for cricket — bowling biomechanics, Hawk-eye ball tracking, batting mechanics and athlete comparison, all from a single phone video."
        path="/cricket"
      />

      <PageIntro
        eyebrow="Cricket intelligence"
        title="Built for cricket. Down to the biomechanics."
        subtitle="Computer-vision analysis purpose-built for the sport — bowling actions, ball tracking, batting mechanics and athlete comparison, all from a single video, all feeding one periodized plan."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/signup" className={cn(buttonVariants({ size: 'lg' }))}>
            Get started
          </Link>
          <Link
            to="/how-it-works"
            className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}
          >
            See how it works
          </Link>
        </div>
      </PageIntro>

      <CricketAnalyses />

      <CTA />
    </>
  )
}
