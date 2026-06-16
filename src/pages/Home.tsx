import { Hero } from '../components/sections/Hero'
import { Problem } from '../components/sections/Problem'
import { Wearable } from '../components/sections/Wearable'
import { HealthTrends } from '../components/sections/HealthTrends'
import { PlatformData } from '../components/sections/PlatformData'
import { PeriodizationEngine } from '../components/sections/PeriodizationEngine'
import { Assessments } from '../components/sections/Assessments'
import { CricketIntelligence } from '../components/sections/CricketIntelligence'
import { AppLaunch } from '../components/sections/AppLaunch'
import { AcademiesPreview } from '../components/sections/AcademiesPreview'
import { Credibility } from '../components/sections/Credibility'
import { CTA } from '../components/sections/CTA'
import { Seo } from '../components/primitives/Seo'

export default function Home() {
  return (
    <>
      <Seo
        title="Qyne — If you have a body, you are an athlete. QYNE is the intelligence to train like one"
        description="QYNE fuses a screenless wearable, lab-grade smartphone assessments and cricket biomechanics into one periodization engine — the ultimate mind for the athletic body."
        path="/"
      />
      <Hero />
      <Problem />
      <Wearable />
      <HealthTrends />
      <PlatformData />
      <PeriodizationEngine />
      <Assessments />
      <CricketIntelligence />
      <AppLaunch />
      <AcademiesPreview />
      <Credibility />
      <CTA />
    </>
  )
}
