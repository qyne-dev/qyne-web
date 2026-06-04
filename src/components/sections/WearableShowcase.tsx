import { Watch } from 'lucide-react'
import { Section } from '../primitives/Container'
import { Eyebrow } from '../primitives/Eyebrow'
import { ScrollReveal } from '../animations/ScrollReveal'
import { WearableOrbit } from '../visuals/WearableOrbit'

export function WearableShowcase() {
  return (
    <Section className="border-t border-border">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <Eyebrow>Wearables</Eyebrow>
          <h2 className="mt-5 text-balance text-[clamp(2.15rem,3.8vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em]">
            Works with what your athletes already wear.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-[1.6] text-muted">
            Qyne is wearable-agnostic. It reads from premium straps and budget
            bands alike — and confidence-weights the data by how far it can trust
            each source.
          </p>
          <div className="mt-7 flex max-w-md items-start gap-3 rounded-lg border border-border bg-surface p-4">
            <Watch size={18} className="mt-0.5 shrink-0 text-primary" />
            <p className="text-[14px] leading-[1.55] text-muted">
              More wearables are added every quarter. No device on the wrist? A
              30-second morning check-in works just as well.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <WearableOrbit />
        </ScrollReveal>
      </div>
    </Section>
  )
}
