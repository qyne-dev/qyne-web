import { Link } from 'react-router-dom'
import { Mail, MessageCircle, BookOpen, ShieldAlert, ArrowRight } from 'lucide-react'
import { Container, Section } from '../components/primitives/Container'
import { Eyebrow } from '../components/primitives/Eyebrow'
import { Card } from '../components/primitives/Card'
import { SectionHeading } from '../components/primitives/SectionHeading'
import { ScrollReveal, Stagger } from '../components/animations/ScrollReveal'
import { Seo } from '../components/primitives/Seo'
import { SITE } from '../lib/site'

const CHANNELS = [
  {
    icon: Mail,
    label: 'Email support',
    body: 'For account, billing, and product questions. Replies within one working day.',
    cta: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    body: 'For pilot academies in Bangalore — a direct line to the team.',
    cta: 'Message on WhatsApp',
    href: 'https://wa.me/910000000000',
  },
  {
    icon: BookOpen,
    label: 'Help centre',
    body: 'Step-by-step guides for academy onboarding, wearable setup, and parent consent.',
    cta: 'Browse guides',
    href: '#guides',
  },
  {
    icon: ShieldAlert,
    label: 'Security & abuse',
    body: 'Report a vulnerability, a data concern, or suspected misuse of the platform.',
    cta: 'Read disclosure policy',
    href: '/security#disclosure',
  },
]

const SLA = [
  { tier: 'Sev 1 — Service unavailable', target: 'First response within 1 hour, 24×7' },
  { tier: 'Sev 2 — Major feature degraded', target: 'First response within 4 hours, business days' },
  { tier: 'Sev 3 — Minor issue', target: 'First response within 1 working day' },
  { tier: 'Sev 4 — General question', target: 'Reply within 2 working days' },
]

const FAQS = [
  {
    q: 'How do I connect my academy’s wearables?',
    a: 'Each athlete authorises a wearable provider once, through the in-app onboarding flow. We support Garmin, Apple Health, WHOOP, and Health Connect (Mi, Noise, boAt, and others). If an athlete has no device, the morning check-in works on its own.',
  },
  {
    q: 'How are training plans generated?',
    a: 'QYNE’s periodization engine turns each athlete’s wearable signals and smartphone assessments into a weekly plan, weighted by readiness and workload. Credentialed sports-science logic sits behind every recommendation.',
  },
  {
    q: 'How do I add or remove a parent on an athlete’s profile?',
    a: 'Open the athlete’s profile and use the Guardians section. Adding a guardian requires consent re-capture. Removing a guardian is immediate, audit-logged, and notifies the remaining guardians.',
  },
  {
    q: 'A wearable showed unusual data overnight. What should I do?',
    a: 'QYNE confidence-weights every signal by device quality, so a noisy reading rarely changes the plan. If a signal looks clearly wrong, mark it as such in the athlete’s profile and the periodization engine will exclude it from that day’s read.',
  },
  {
    q: 'Can parents request a copy or deletion of their child’s data?',
    a: 'Yes. Parents can email our Data Protection Officer or use the in-app request. See the Privacy Policy for the full process and timelines.',
  },
  {
    q: 'What happens if we cancel?',
    a: 'You can export all academy data for 30 days after cancellation. After 30 days, data is deleted in accordance with our retention schedule. The coach audit trail is preserved for 7 years to support compliance review.',
  },
]

function ChannelLink({ href, label }: { href: string; label: string }) {
  const cls =
    'group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light'
  const arrow = (
    <ArrowRight
      size={14}
      className="transition-transform group-hover:translate-x-0.5"
    />
  )
  if (href.startsWith('http') || href.startsWith('mailto:')) {
    const isHttp = href.startsWith('http')
    return (
      <a
        href={href}
        className={cls}
        {...(isHttp ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {label}
        {arrow}
      </a>
    )
  }
  return (
    <Link to={href} className={cls}>
      {label}
      {arrow}
    </Link>
  )
}

const STATUS = [
  { label: 'API', state: 'Operational' },
  { label: 'Wearable ingest', state: 'Operational' },
  { label: 'Coach dashboard', state: 'Operational' },
  { label: 'Parent reports', state: 'Operational' },
]

export default function Support() {
  return (
    <>
      <Seo
        title="Support — QYNE"
        description="Help, account questions, security reports, and service status for QYNE customers."
        path="/support"
      />

      <section className="relative overflow-hidden border-b border-border pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div
          aria-hidden
          className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-40"
        />
        <Container className="relative">
          <ScrollReveal>
            <Eyebrow>Support</Eyebrow>
            <h1 className="mt-5 text-balance text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[1.05] tracking-[-0.025em]">
              We answer fast, because your athletes train every day.
            </h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-[1.6] text-muted">
              Choose the channel that fits your question. For anything
              security-related, use the responsible disclosure path so the
              right team sees it first.
            </p>
            <p className="mt-6 text-[14px] text-faint">
              <strong className="text-muted">Note —</strong> contact details and
              SLAs on this page are placeholder values for site review.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <Section>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c) => (
            <Stagger.Item key={c.label} className="h-full">
              <Card className="flex h-full flex-col p-6">
                <div className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface-2">
                  <c.icon size={18} className="text-primary" />
                </div>
                <h3 className="mt-5 text-[1.05rem] font-medium tracking-tight text-ink">
                  {c.label}
                </h3>
                <p className="mt-2 flex-1 text-[14px] leading-[1.6] text-muted">
                  {c.body}
                </p>
                <ChannelLink href={c.href} label={c.cta} />
              </Card>
            </Stagger.Item>
          ))}
        </Stagger>
      </Section>

      <Section id="sla" className="border-t border-border bg-surface">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading
            eyebrow="Response targets"
            title="What you can expect from us, by severity."
            description="Service-level targets for paid academy accounts. Pilot accounts get the same response targets, on a best-effort basis."
          />
          <ScrollReveal>
            <Card interactive={false} className="overflow-hidden">
              <ul className="divide-y divide-border">
                {SLA.map((row) => (
                  <li
                    key={row.tier}
                    className="grid gap-1 p-5 sm:grid-cols-[1.2fr_1fr] sm:items-center sm:gap-6"
                  >
                    <span className="text-[14px] font-medium text-ink">{row.tier}</span>
                    <span className="text-[14px] text-muted">{row.target}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      <Section id="guides" className="border-t border-border">
        <SectionHeading
          eyebrow="FAQ"
          title="The questions we hear most often."
        />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {FAQS.map((item) => (
            <Stagger.Item key={item.q} className="h-full">
              <Card className="h-full p-6">
                <h3 className="text-[1rem] font-medium tracking-tight text-ink">
                  {item.q}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.62] text-muted">
                  {item.a}
                </p>
              </Card>
            </Stagger.Item>
          ))}
        </Stagger>
      </Section>

      <Section id="status" className="border-t border-border bg-surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Status"
            title="System status, at a glance."
            description="A full status page with incident history is on the roadmap. For now, current operational state of core services is shown here."
          />
          <ScrollReveal>
            <Card interactive={false} className="p-2">
              <ul className="divide-y divide-border">
                {STATUS.map((s) => (
                  <li key={s.label} className="flex items-center justify-between p-4">
                    <span className="text-[14px] text-ink">{s.label}</span>
                    <span className="inline-flex items-center gap-2 text-[13px] text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {s.state}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        </div>
      </Section>
    </>
  )
}
