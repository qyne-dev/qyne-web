import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Users, Activity, FileText, ClipboardCheck, MapPin, Rocket } from 'lucide-react'
import { Section } from '../components/primitives/Container'
import { SectionHeading } from '../components/primitives/SectionHeading'
import { buttonVariants } from '../components/primitives/Button'
import { Stagger } from '../components/animations/ScrollReveal'
import { PageIntro } from '../components/sections/PageIntro'
import { AcademiesPreview } from '../components/sections/AcademiesPreview'
import { CTA } from '../components/sections/CTA'
import { Seo } from '../components/primitives/Seo'
import { cn } from '../lib/utils'

const VALUE: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Users,
    title: 'See the whole squad',
    body: 'Every athlete’s readiness, sorted and colour-coded, the moment you open Monday morning.',
  },
  {
    icon: Activity,
    title: 'Catch overload early',
    body: 'Acute-to-chronic workload across every athlete, with the safe zone marked. Outliers surface themselves.',
  },
  {
    icon: FileText,
    title: 'Automatic parent reports',
    body: 'A clear monthly report on training, recovery and load — generated for every athlete, no admin time.',
  },
  {
    icon: ClipboardCheck,
    title: 'The coach stays in control',
    body: 'Recommended sessions come from each athlete’s data — use, modify or approve. The plan is yours to sign off.',
  },
  {
    icon: MapPin,
    title: 'Built for India',
    body: 'Pricing, wearables and workflows designed for how Indian cricket academies actually run — not retrofitted.',
  },
  {
    icon: Rocket,
    title: 'Live in under a week',
    body: 'Full setup and athlete onboarding in under a week, with hands-on support from our team.',
  },
]

export default function ForAcademies() {
  return (
    <>
      <Seo
        title="For academies — QYNE"
        description="Give every athlete data-driven training: squad readiness, workload and injury-risk monitoring, automatic parent reports, and a coach-led workflow."
        path="/for-academies"
      />

      <PageIntro
        eyebrow="For academies"
        title="Built for the way academies run."
        subtitle="Individualized, data-driven training for every athlete in your squad — readiness, workload and skill, on one screen the coach controls."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/#demo" className={cn(buttonVariants({ size: 'lg' }))}>
            Request a demo
          </Link>
          <Link to="/how-it-works" className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}>
            See how it works
          </Link>
        </div>
      </PageIntro>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Why academies choose QYNE"
          title="Individualized training, at the scale of a squad."
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {VALUE.map((v) => (
            <Stagger.Item key={v.title} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-faint">
                <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface-2">
                  <v.icon size={18} className="text-primary" />
                </span>
                <h3 className="mt-5 text-[1.05rem] font-medium tracking-tight text-ink">{v.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-muted">{v.body}</p>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </Section>

      <AcademiesPreview />

      <CTA />
    </>
  )
}
