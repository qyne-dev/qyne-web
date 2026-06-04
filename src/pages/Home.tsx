import { Hero } from '../components/sections/Hero'
import { Problem } from '../components/sections/Problem'
import { Process } from '../components/sections/Process'
import { WearableShowcase } from '../components/sections/WearableShowcase'
import { AcademiesPreview } from '../components/sections/AcademiesPreview'
import { Credibility } from '../components/sections/Credibility'
import { CTA } from '../components/sections/CTA'
import { Seo } from '../components/primitives/Seo'

export default function Home() {
  return (
    <>
      <Seo
        title="Qyne — The S&C department your academy can't afford to hire"
        description="Qyne generates coach-approved strength & conditioning plans for cricket and badminton academies in India. Wearable-driven. Coach-led."
        path="/"
      />
      <Hero />
      <Problem />
      <Process />
      <WearableShowcase />
      <AcademiesPreview />
      <Credibility />
      <CTA />
    </>
  )
}
