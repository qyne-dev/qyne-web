import { SITE } from '../../lib/site'

interface SeoProps {
  title: string
  description: string
  /** Route path beginning with "/" — combined with SITE.url for canonical/OG. */
  path: string
  /** Absolute image URL for social cards. Defaults to the site OG image. */
  image?: string
  /** Set on pages that shouldn't be indexed (auth, transient flows). */
  noindex?: boolean
}

/**
 * Per-page document metadata. React 19 hoists <title>/<meta>/<link> rendered
 * anywhere in the tree up into <head>, so each page renders its own <Seo/>.
 * Canonical, Open Graph and Twitter tags all derive from SITE constants.
 */
export function Seo({ title, description, path, image = SITE.ogImage, noindex }: SeoProps) {
  const url = `${SITE.url}${path}`
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}
