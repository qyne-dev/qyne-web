import { motion } from 'framer-motion'
import { BrainCircuit } from 'lucide-react'
import { RecoveryRing } from './RecoveryRing'
import { HrvWaveform } from './HrvWaveform'
import { PulseRing } from '../animations/PulseRing'
import { EASE } from '../animations/ScrollReveal'
import { useLiveValue } from '../../hooks/useLiveValue'
import { cn } from '../../lib/utils'

function StatRow({
  label,
  value,
  status,
  dotClass,
  last = false,
}: {
  label: string
  value: string
  status: string
  dotClass: string
  last?: boolean
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-between py-2.5',
        !last && 'border-b border-border',
      )}
    >
      <span className="flex items-center gap-2.5">
        <span className={cn('h-1.5 w-1.5 rounded-full', dotClass)} />
        <span className="text-[13px] text-muted">{label}</span>
      </span>
      <span className="flex items-center gap-2.5">
        <span className="font-mono text-[13px] text-ink">{value}</span>
        <span className="text-[11px] text-faint">{status}</span>
      </span>
    </div>
  )
}

/** Stylised, self-animating preview of an athlete's readiness dashboard. */
export function DashboardPreview() {
  const hrv = useLiveValue(68, 1, 3600)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
      className="relative mx-auto w-full max-w-[400px]"
    >
      {/* Floating credential tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE, delay: 1.7 }}
        className="absolute -right-3 -top-3 z-10 flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary-bg px-2.5 py-1.5"
      >
        <BrainCircuit size={13} className="text-primary" />
        <span className="label text-primary">Periodized</span>
      </motion.div>

      <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="label text-faint">Athlete snapshot</span>
          </span>
          <span className="font-mono text-[11px] text-faint">MON · 06:40</span>
        </div>

        {/* Recovery ring */}
        <div className="mt-5 border-t border-border pt-7">
          <div className="relative grid place-items-center">
            <div className="absolute h-[128px] w-[128px]">
              <PulseRing count={3} />
            </div>
            <RecoveryRing score={82} />
          </div>

          <div className="mt-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary-bg px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[13px] font-medium text-primary-light">
                Cleared for full training
              </span>
            </span>
          </div>
        </div>

        {/* HRV trend */}
        <div className="mt-7">
          <div className="flex items-center justify-between">
            <span className="label text-faint">HRV trend</span>
            <span className="font-mono text-[11px] text-faint">7 days</span>
          </div>
          <div className="mt-2.5 h-14 w-full">
            <HrvWaveform className="h-full w-full" delay={0.9} />
          </div>
        </div>

        {/* Supporting metrics — across QYNE's signals */}
        <div className="mt-4 border-t border-border pt-1">
          <StatRow
            label="Heart-rate variability"
            value={`${hrv} ms`}
            status="Balanced"
            dotClass="bg-info"
          />
          <StatRow
            label="Sleep"
            value="7h 48m"
            status="Optimal"
            dotClass="bg-accent"
          />
          <StatRow
            label="Bowling speed"
            value="138.6 km/h"
            status="+1.4"
            dotClass="bg-primary"
          />
          <StatRow
            label="Training load · ACWR"
            value="0.94"
            status="In range"
            dotClass="bg-primary"
            last
          />
        </div>

        {/* Periodization engine output */}
        <div className="mt-4 flex items-center justify-between rounded-md border border-border bg-surface-2 px-3.5 py-3">
          <span className="flex items-center gap-2">
            <BrainCircuit size={14} className="text-primary" />
            <span className="text-[12px] text-muted">Today’s plan</span>
          </span>
          <span className="font-mono text-[12px] text-ink">Strength · Bowling skill</span>
        </div>
      </div>
    </motion.div>
  )
}
