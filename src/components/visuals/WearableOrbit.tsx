import { motion, type Transition } from 'framer-motion'
import { PulseRing } from '../animations/PulseRing'
import { WEARABLES } from '../../lib/site'

const SPIN: Transition = { duration: 64, ease: 'linear', repeat: Infinity }
const RADIUS = 37 // % from centre to each chip's centre

/** Polar coordinate (in %) for chip `i` of `count`, starting at the top. */
function point(i: number, count: number) {
  const theta = ((-90 + (360 / count) * i) * Math.PI) / 180
  return {
    x: 50 + RADIUS * Math.cos(theta),
    y: 50 + RADIUS * Math.sin(theta),
  }
}

function RingGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="mx-auto h-6 w-6" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="var(--color-border)" strokeWidth="2.6" />
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="var(--color-primary)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="37 13.3"
        transform="rotate(-90 12 12)"
      />
    </svg>
  )
}

/** Wearable brand chips slowly orbiting the Qyne mark. */
export function WearableOrbit() {
  const count = WEARABLES.length

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* Static orbit tracks */}
      <div className="absolute inset-[12%] rounded-full border border-dashed border-border" />
      <div className="absolute inset-[31%] rounded-full border border-border/60" />

      {/* Rotating layer: connector lines + chips */}
      <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={SPIN}>
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {WEARABLES.map((brand, i) => {
            const p = point(i, count)
            return (
              <line
                key={brand}
                x1="50"
                y1="50"
                x2={p.x}
                y2={p.y}
                stroke="var(--color-border)"
                strokeWidth="0.4"
              />
            )
          })}
        </svg>

        {WEARABLES.map((brand, i) => {
          const p = point(i, count)
          return (
            <div
              key={brand}
              className="absolute"
              style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%,-50%)' }}
            >
              <motion.span
                className="block whitespace-nowrap rounded-md border border-border bg-surface-2 px-2.5 py-1.5 text-[11px] font-medium text-ink sm:px-3 sm:text-[12px]"
                animate={{ rotate: -360 }}
                transition={SPIN}
              >
                {brand}
              </motion.span>
            </div>
          )
        })}
      </motion.div>

      {/* Centre node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-24 w-24 place-items-center rounded-full border border-border bg-surface">
          <PulseRing count={2} />
          <div className="relative text-center">
            <RingGlyph />
            <span className="mt-1.5 block font-mono text-[10px] tracking-[0.16em] text-faint">
              QYNE
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
