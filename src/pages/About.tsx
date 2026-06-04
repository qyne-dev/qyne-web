import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, HeartHandshake, Database, Sparkles } from 'lucide-react'
import { Container, Section } from '../components/primitives/Container'
import { Eyebrow } from '../components/primitives/Eyebrow'
import { Card } from '../components/primitives/Card'
import { SectionHeading } from '../components/primitives/SectionHeading'
import { ScrollReveal, Stagger } from '../components/animations/ScrollReveal'
import { Seo } from '../components/primitives/Seo'
import { buttonVariants } from '../components/primitives/Button'
import { cn } from '../lib/utils'
import { SITE } from '../lib/site'

const STORY = [
  'India produces extraordinary cricket and badminton talent every year. But injury rates among youth athletes are climbing, and most academies cannot afford a credentialed strength & conditioning coach. Athletes train hard, with very little structured load management. Qyne exists to close that gap.',
  'Phase 1 of our work is a wearable-driven S&C platform that gives every academy the equivalent of an S&C coach in software — coach-approved plans, daily readiness scoring, parental consent flows for minors, and a full audit trail for liability. Built for the way Indian academies actually run, not retrofitted from Western SaaS.',
  'We are not stopping there. Our long-term roadmap extends into video biomechanics, performance analytics, and a broader athletic intelligence platform. The goal is to make serious sports science available to every academy in the country — not just the ones at elite institutions.',
]

const VALUES = [
  {
    icon: HeartHandshake,
    title: 'Coach-led, AI-assisted',
    body: 'Every plan is reviewed and approved by a credentialed human coach. We respect coaches; we are not here to replace them.',
  },
  {
    icon: Database,
    title: 'Honest about data',
    body: 'We tell coaches and athletes when a signal is high-confidence and when it is not. We do not invent precision we have not earned.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliant by design',
    body: 'Parental consent for minors, DPDP Act compliance, and a full audit trail are built into the product from day one — not bolted on later.',
  },
  {
    icon: Sparkles,
    title: 'Made in India for India',
    body: 'Pricing, integrations, and the user experience are designed for Indian academies — not a translated version of a Western product.',
  },
]

const TEAM = [
  {
    name: 'Founder name',
    role: 'Founder & CEO',
    bio: 'Background in [sport or industry] — drove the decision to start Qyne after seeing the gap in S&C infrastructure across Indian academies firsthand. Placeholder bio.',
    initials: 'FN',
  },
  {
    name: 'Engineering lead',
    role: 'Co-founder & Engineering Lead',
    bio: '[Years] of product engineering experience across [domains]. Leads platform, data pipeline, and the rules engine that powers every plan. Placeholder bio.',
    initials: 'EL',
  },
  {
    name: 'Head of Sports Science',
    role: 'Co-founder & Head of Sports Science',
    bio: 'Credentialed S&C coach with [NCA / NSNIS / certifications] and [years] of work with [cricket / badminton] academies. Owns the periodization logic and coach workflow. Placeholder bio.',
    initials: 'HS',
  },
]

const ROLES = [
  'Senior ML / Computer Vision Engineer — cricket biomechanics',
  'Backend Engineer — Node, TypeScript, NestJS',
  'Sports Science Consultant — S&C, cricket or badminton focus',
  'Academy Partnership Manager — Bangalore / Hyderabad',
]

export default function About() {
  return (
    <>
      <Seo
        title="About — Qyne"
        description="The team, the values, and the long-term vision behind Qyne — the strength & conditioning platform for Indian sports academies."
        path="/about"
      />

      <section className="relative overflow-hidden border-b border-border pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div
          aria-hidden
          className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-40"
        />
        <Container className="relative">
          <ScrollReveal>
            <Eyebrow>About Qyne</Eyebrow>
            <h1 className="mt-5 max-w-3xl text-balance text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.025em]">
              We are building the athletic intelligence platform Indian academies deserve.
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-muted">
              Started in 2026, Qyne is operated by {SITE.legalName} in Bangalore.
              Our work today is wearable-driven strength &amp; conditioning. Our
              roadmap extends into video biomechanics, performance analytics, and
              a broader athletic intelligence platform.
            </p>
            <p className="mt-6 text-[13px] text-faint">
              <strong className="text-muted">Note —</strong> team bios and partner
              names on this page are placeholder values for site review.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading eyebrow="Our story" title="Why Qyne exists." />
          <ScrollReveal>
            <div className="space-y-5 text-[16px] leading-[1.72] text-muted">
              {STORY.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section id="values" className="border-t border-border bg-surface">
        <SectionHeading
          align="center"
          eyebrow="Our values"
          title="What we will not trade away."
          description="Four commitments that shape every product decision."
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <Stagger.Item key={v.title} className="h-full">
              <Card className="flex h-full flex-col p-6">
                <div className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface-2">
                  <v.icon size={18} className="text-primary" />
                </div>
                <h3 className="mt-5 text-[1.05rem] font-medium tracking-tight text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-muted">{v.body}</p>
              </Card>
            </Stagger.Item>
          ))}
        </Stagger>
      </Section>

      <Section id="team" className="border-t border-border">
        <SectionHeading
          eyebrow="Team"
          title="Three founders. One mission."
          description="A founder-led team, deliberately small while we ship Phase 1."
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {TEAM.map((p) => (
            <Stagger.Item key={p.role} className="h-full">
              <Card className="flex h-full flex-col p-7">
                <div className="grid h-14 w-14 place-items-center rounded-md border border-border bg-surface-2 font-mono text-[14px] tracking-wide text-primary">
                  {p.initials}
                </div>
                <h3 className="mt-6 text-[1.1rem] font-medium tracking-tight text-ink">
                  {p.name}
                </h3>
                <p className="mt-1 text-[13px] text-primary">{p.role}</p>
                <p className="mt-4 text-[14px] leading-[1.62] text-muted">{p.bio}</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-ink"
                >
                  Open to networking
                  <ArrowRight size={13} />
                </a>
              </Card>
            </Stagger.Item>
          ))}
        </Stagger>
      </Section>

      <Section id="careers" className="border-t border-border bg-surface">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Careers"
            title="We are hiring across engineering, sports science, and partnerships."
            description="If you want to build sports science infrastructure for India, we want to talk to you."
          />
          <ScrollReveal>
            <Card interactive={false} className="overflow-hidden">
              <ul className="divide-y divide-border">
                {ROLES.map((r) => (
                  <li
                    key={r}
                    className="flex items-center justify-between gap-4 p-5"
                  >
                    <span className="text-[14px] text-ink">{r}</span>
                    <span className="label text-faint">Open</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border p-5">
                <a
                  href={`mailto:${SITE.email}`}
                  className={cn(buttonVariants({ size: 'sm' }))}
                >
                  Apply at {SITE.email}
                  <ArrowRight size={14} />
                </a>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      <Section id="press" className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Press"
            title="Working on a story about Indian sports science?"
            description="We are happy to chat. Logo, founder bios, and boilerplate available on request."
          />
          <ScrollReveal>
            <Card interactive={false} className="p-7">
              <p className="text-[14px] leading-[1.62] text-muted">
                Press kit, founder photos, and high-resolution product
                screenshots are available to credentialed journalists. Please
                include your outlet and deadline in your email.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'mt-6')}
              >
                Email press
              </a>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-primary">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ScrollReveal>
            <h2 className="text-balance text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.07] tracking-[-0.025em] text-bg">
              Want to see Qyne in your academy?
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-[1.6] text-primary-bg">
              Three academies in Bangalore and Hyderabad are running our Phase 1
              pilot. We are taking a small number of additional partners through 2026.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/#demo" className={cn(buttonVariants({ size: 'lg' }), 'bg-bg text-ink hover:bg-surface-2')}>
                Request a demo
              </Link>
              <Link
                to="/how-it-works"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-bg/80 transition-colors hover:text-bg"
              >
                See how it works
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  )
}
