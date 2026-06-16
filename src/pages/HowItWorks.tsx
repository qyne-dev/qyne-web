import { Process } from '../components/sections/Process'
import { CTA } from '../components/sections/CTA'
import { Seo } from '../components/primitives/Seo'

export default function HowItWorks() {
  return (
    <>
      <Seo
        title="How it works — QYNE"
        description="From wearable signals and smartphone assessments to a periodized plan — how QYNE turns an athlete's data into training that compounds."
        path="/how-it-works"
      />
      <div className="pt-16">
        <Process />
      </div>
      <CTA />
    </>
  )
}
