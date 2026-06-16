/**
 * Qyne site-wide content constants.
 * Content is hardcoded by design — no CMS. Edit here.
 */

export const SITE = {
  name: 'Qyne',
  legalName: 'Qyne Technologies Pvt Ltd',
  tagline: 'If you have a body, you are an athlete. QYNE is the intelligence to train like one.',
  description:
    'QYNE turns wearable data, smartphone assessments and cricket biomechanics into a personalized, periodized training plan.',
  locations: 'Bangalore · India',
  email: 'support@qyne.one',
} as const

/** Primary navigation — used by Nav and the demo CTA. */
export const NAV_LINKS = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'For academies', href: '/for-academies' },
  { label: 'For athletes', href: '/for-athletes' },
  { label: 'About', href: '/about' },
] as const

/** Wearable brands Qyne ingests data from. */
export const WEARABLES = [
  'Garmin',
  'Apple Watch',
  'WHOOP',
  'Fitbit Air',
  'Mi Band',
  'Noise',
  'boAt',
  'Polar',
] as const

/** Footer link columns. */
export const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Assessments', href: '/#assessments' },
      { label: 'Cricket intelligence', href: '/#cricket' },
      { label: 'Wearable', href: '/#wearable' },
      { label: 'Get the app', href: '/#app' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/about#team' },
      { label: 'Careers', href: '/about#careers' },
      { label: 'Press', href: '/about#press' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help centre', href: '/support' },
      { label: 'Status', href: '/support#status' },
      { label: 'Contact', href: 'mailto:support@qyne.one' },
      { label: 'Security report', href: '/security#disclosure' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
      { label: 'DPDP compliance', href: '/privacy#minors' },
    ],
  },
] as const

/** Role options for the demo request form. */
export const DEMO_ROLES = [
  'Academy owner',
  'Head coach',
  'Coach',
  'Other',
] as const
