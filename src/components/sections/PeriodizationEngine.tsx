import { Link } from 'react-router-dom'
import { BrainCircuit, Watch, Smartphone, Activity, Dumbbell, ShieldCheck, Target, LineChart, ArrowRight } from 'lucide-react'
import { Section, Container } from '../primitives/Container'
import { Eyebrow } from '../primitives/Eyebrow'
import { ScrollReveal, Stagger } from '../animations/ScrollReveal'

const INPUTS = [
  { icon: Watch, label: 'Wearable signals' },
  { icon: Smartphone, label: 'Smartphone assessments' },
  { icon: Activity, label: 'Movement biomechanics' },
  { icon: Dumbbell, label: 'Strength & load profiles' },
]

const OUTPUTS = [
  { icon: Target, label: 'Personalized training plans' },
  { icon: ShieldCheck, label: 'Injury-risk reduction' },
  { icon: LineChart, label: 'Performance optimization' },
  { icon: Activity, label: 'Progress tracking over time' },
]

export function PeriodizationEngine() {
  return (
    <Section bleed className="relative overflow-hidden border-t border-border bg-surface">
      <div
        aria-hidden
        className="dot-bg mask-fade pointer-events-none absolute inset-0 opacity-50"
      />
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: 'var(--color-primary)' }}
      />

      <Container className="relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Periodization engine</Eyebrow>
          </div>
          <h2 className="mt-6 text-balance text-[clamp(2.4rem,5.2vw,4.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">
            The Ultimate Mind for the Athletic Body.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.6] text-muted">
            Every signal — from the wrist, the camera, the barbell — flows into one
            engine. It reads readiness and workload, then designs the exact
            exercise and skill-based program to make you the best version of
            yourself, while staying injury-free.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* Inputs */}
          <Stagger className="flex flex-col gap-3">
            <span className="label text-faint lg:text-right">Signals in</span>
            {INPUTS.map((it) => (
              <Stagger.Item key={it.label}>
                <div className="flex items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3 lg:flex-row-reverse lg:text-right">
                  <it.icon size={18} className="shrink-0 text-info" />
                  <span className="text-[14px] text-ink">{it.label}</span>
                </div>
              </Stagger.Item>
            ))}
          </Stagger>

          {/* Engine */}
          <ScrollReveal delay={0.1} className="flex justify-center">
            <div className="relative grid h-36 w-36 place-items-center rounded-2xl border border-primary/40 bg-primary-bg">
              <span className="animate-pulse-ring absolute inset-0 rounded-2xl border border-primary/40" />
              <BrainCircuit size={52} className="text-primary" />
            </div>
          </ScrollReveal>

          {/* Outputs */}
          <Stagger className="flex flex-col gap-3">
            <span className="label text-faint">Plans out</span>
            {OUTPUTS.map((it) => (
              <Stagger.Item key={it.label}>
                <div className="flex items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3">
                  <it.icon size={18} className="shrink-0 text-primary" />
                  <span className="text-[14px] text-ink">{it.label}</span>
                </div>
              </Stagger.Item>
            ))}
          </Stagger>
        </div>

        <ScrollReveal delay={0.15} className="mt-12 flex justify-center">
          <Link
            to="/periodization"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Explore the periodization model
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
