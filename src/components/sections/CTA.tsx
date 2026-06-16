import { Check } from 'lucide-react'
import { Section } from '../primitives/Container'
import { ScrollReveal } from '../animations/ScrollReveal'
import { DemoForm } from './DemoForm'

const ASSURANCES = [
  '3-month pilot at 50% off',
  'No setup fee — cancel anytime',
  'Full onboarding in under a week',
]

export function CTA() {
  return (
    <Section id="demo" className="bg-primary">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2.5">
            <span className="h-px w-7 bg-primary-bg/40" />
            <span className="label text-primary-bg/80">Request a demo</span>
          </span>
          <h2 className="mt-5 text-balance text-[clamp(2.1rem,3.6vw,3.2rem)] font-medium leading-[1.07] tracking-[-0.025em] text-bg">
            Ready to train your athletes smarter?
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-[1.6] text-primary-bg">
            We’re onboarding a small group of cricket academies in Bangalore
            through 2026. Be one of them.
          </p>
          <ul className="mt-7 space-y-3">
            {ASSURANCES.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[15px] text-bg">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-bg/10">
                  <Check size={13} className="text-bg" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-lg border border-border bg-bg p-6 shadow-xl shadow-black/20 sm:p-8">
            <DemoForm />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
