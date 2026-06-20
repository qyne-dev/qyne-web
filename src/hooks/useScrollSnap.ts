import { useEffect } from 'react'
import { useLenis } from 'lenis/react'
import Snap from 'lenis/snap'

/**
 * Gently snaps the nearest top-level <section> to the top of the viewport as
 * the user settles their scroll. Uses Lenis's Snap addon so it cooperates with
 * the smooth-scroll engine instead of fighting it.
 *
 * `proximity` (not `mandatory`) means it only nudges when you stop near a
 * section boundary — sections taller than the viewport still scroll freely.
 * No-ops under reduced motion, where Lenis is disabled and `useLenis()` is null.
 */
export function useScrollSnap(selector: string) {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return
    const sections = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (sections.length === 0) return

    const snap = new Snap(lenis, {
      type: 'proximity',
      duration: 0.9,
      distanceThreshold: '32%',
    })
    sections.forEach((el) => snap.addElement(el, { align: ['start'] }))

    return () => snap.destroy()
  }, [lenis, selector])
}
