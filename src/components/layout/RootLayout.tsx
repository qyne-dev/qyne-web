import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import { useReducedMotion } from 'framer-motion'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { ScrollManager } from './ScrollManager'

/** Holds layout while a lazily-loaded page chunk is fetched (prevents CLS). */
function RouteFallback() {
  return <div aria-hidden className="min-h-[60vh]" />
}

/** App shell: smooth scroll, skip link, nav, routed page, footer. */
export function RootLayout() {
  const reduced = useReducedMotion()

  const shell = (
    <>
      <ScrollManager />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-modal focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )

  // Skip Lenis entirely when the user prefers reduced motion.
  if (reduced) return shell

  return (
    <ReactLenis root options={{ duration: 1.05, lerp: 0.1 }}>
      {shell}
    </ReactLenis>
  )
}
