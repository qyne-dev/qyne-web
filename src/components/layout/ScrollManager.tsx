import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

/**
 * Resets scroll on route change and scrolls to #hash targets.
 * Uses the Lenis instance when present, falls back to native scroll.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      // Wait for the target section to mount before scrolling.
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (!el) return
        if (lenis) lenis.scrollTo(el, { offset: -80 })
        else el.scrollIntoView({ behavior: 'smooth' })
      })
      return () => cancelAnimationFrame(raf)
    }

    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, hash, lenis])

  return null
}
