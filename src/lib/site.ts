/**
 * Qyne site-wide content constants.
 * Content is hardcoded by design — no CMS. Edit here.
 */

export const SITE = {
  name: 'Qyne',
  legalName: 'Qyne Technologies Pvt Ltd',
  tagline: 'The S&C department your academy can’t afford to hire.',
  description:
    'Qyne generates coach-approved strength & conditioning plans for cricket and badminton academies in India.',
  locations: 'Bangalore · Hyderabad · India',
  email: 'support@qyne.in',
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

/** Placeholder partner academies. */
export const TRUST_ACADEMIES = [
  'Karnataka Cricket Centre',
  'Deccan Smash Badminton',
  'Whitefield Sports Academy',
] as const

/** Footer link columns. */
export const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '/how-it-works' },
      { label: 'For academies', href: '/for-academies' },
      { label: 'For athletes', href: '/for-athletes' },
      { label: 'Wearables', href: '/how-it-works#wearables' },
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
      { label: 'Contact', href: 'mailto:support@qyne.in' },
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
  'S&C coach',
  'Other',
] as const
