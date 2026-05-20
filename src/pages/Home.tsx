import { Hero } from '../components/sections/Hero'
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
    </>
  )
}
