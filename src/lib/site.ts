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
  demoEmail: 'hello@qyne.in',
  careersEmail: 'careers@qyne.in',
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
      { label: 'Features', href: '/for-academies' },
      { label: 'Wearables', href: '/how-it-works#wearables' },
      { label: 'Roadmap', href: '/about#roadmap' },
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
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/about#privacy' },
      { label: 'Terms', href: '/about#terms' },
      { label: 'DPDP compliance', href: '/for-athletes#privacy' },
      { label: 'Contact', href: 'mailto:hello@qyne.in' },
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
