/**
 * Per-page document metadata. React 19 hoists <title>/<meta>/<link>
 * rendered anywhere in the tree up into <head>.
 */
export function Seo({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://qyne.in${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://qyne.in${path}`} />
    </>
  )
}
