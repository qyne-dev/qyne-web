import { motion } from 'framer-motion'
import { Activity, HeartPulse, Flame, BrainCircuit } from 'lucide-react'
import { RecoveryRing } from './RecoveryRing'
import { PhoneFrame } from './PhoneFrame'
import { EASE } from '../animations/ScrollReveal'

const TILES = [
  { label: 'HRV', value: '68', unit: 'ms', color: 'var(--color-primary)' },
  { label: 'Sleep', value: '82', unit: '/100', color: 'var(--color-accent)' },
  { label: 'Strain', value: '14.2', unit: '/21', color: 'var(--color-warning)' },
  { label: 'Resting HR', value: '52', unit: 'bpm', color: 'var(--color-danger)' },
]

const NAV = [Activity, HeartPulse, Flame, BrainCircuit]

/** Stylised QYNE app screen inside a phone frame — self-animating. */
export function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mx-auto w-full max-w-[300px]"
    >
      <PhoneFrame>
        {/* Screen */}
        <div className="px-5 pb-5 pt-9">
            {/* Status / greeting row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="label text-faint">Good morning</p>
                <p className="mt-1 text-[15px] font-medium tracking-tight text-ink">
                  Arjun
                </p>
              </div>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
            </div>

            {/* Recovery ring */}
            <div className="mt-6 grid place-items-center">
              <RecoveryRing score={82} size={150} />
            </div>

            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary-bg px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[12px] font-medium text-primary-light">
                  Cleared for full training
                </span>
              </span>
            </div>

            {/* Metric tiles */}
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {TILES.map((t) => (
                <div
                  key={t.label}
                  className="rounded-lg border border-border bg-surface p-3"
                >
                  <span className="label text-faint">{t.label}</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span
                      className="font-mono text-[1.4rem] font-medium leading-none"
                      style={{ color: t.color }}
                    >
                      {t.value}
                    </span>
                    <span className="text-[11px] text-faint">{t.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Today's plan */}
            <div className="mt-3 flex items-center justify-between rounded-md border border-border bg-surface-2 px-3.5 py-3">
              <span className="flex items-center gap-2">
                <BrainCircuit size={14} className="text-primary" />
                <span className="text-[12px] text-muted">Today’s plan</span>
              </span>
              <span className="font-mono text-[12px] text-ink">Strength</span>
            </div>

            {/* Bottom nav */}
            <div className="mt-5 flex items-center justify-around border-t border-border pt-4">
              {NAV.map((Icon, i) => (
                <Icon
                  key={i}
                  size={20}
                  className={i === 0 ? 'text-primary' : 'text-faint'}
                />
              ))}
            </div>
          </div>
      </PhoneFrame>
    </motion.div>
  )
}
