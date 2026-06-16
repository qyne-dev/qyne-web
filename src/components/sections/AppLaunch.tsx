import { Check } from 'lucide-react'
import { Section } from '../primitives/Container'
import { Eyebrow } from '../primitives/Eyebrow'
import { StoreBadge } from '../primitives/StoreBadge'
import { PhoneMockup } from '../visuals/PhoneMockup'
import { ScrollReveal } from '../animations/ScrollReveal'

const FEATURES = [
  'Recovery, sleep, HRV and strain — read at a glance every morning',
  'Your periodized plan, updated daily from the signals that matter',
  'Pairs with the QYNE band and the wearable you already own',
]

export function AppLaunch() {
  return (
    <Section id="app" className="border-t border-border bg-surface">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Message + store badges */}
        <ScrollReveal>
          <Eyebrow>The QYNE app</Eyebrow>

          <span className="ml-0 mt-5 inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary-bg px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="label text-primary">Coming soon · 2026</span>
          </span>

          <h2 className="mt-5 text-balance text-[clamp(2.15rem,3.8vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em]">
            Your training brain, now in your pocket.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.6] text-muted">
            Everything QYNE measures and plans — recovery, biometrics, assessments
            and cricket intelligence — arrives in one app. Landing soon on the
            App&nbsp;Store and Google&nbsp;Play.
          </p>

          <ul className="mt-7 space-y-3">
            {FEATURES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-bg">
                  <Check size={13} className="text-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Store badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <StoreBadge store="apple" />
            <StoreBadge store="google" />
          </div>

          <p className="mt-4 font-mono text-[11px] tracking-wide text-faint">
            Free to download · iOS &amp; Android
          </p>
        </ScrollReveal>

        {/* Phone mockup */}
        <div className="lg:pl-6">
          <PhoneMockup />
        </div>
      </div>
    </Section>
  )
}
