import { LegalPage, LegalSection, LegalList } from '../components/layout/LegalPage'
import { SITE } from '../lib/site'

const TOC = [
  { id: 'agreement', label: '1. Agreement to terms' },
  { id: 'service', label: '2. The service' },
  { id: 'accounts', label: '3. Accounts & access' },
  { id: 'use', label: '4. Acceptable use' },
  { id: 'content', label: '5. Customer content' },
  { id: 'fees', label: '6. Fees & billing' },
  { id: 'ip', label: '7. Intellectual property' },
  { id: 'medical', label: '8. Not medical advice' },
  { id: 'termination', label: '9. Suspension & termination' },
  { id: 'warranties', label: '10. Warranties & disclaimers' },
  { id: 'liability', label: '11. Limitation of liability' },
  { id: 'law', label: '12. Governing law' },
  { id: 'changes', label: '13. Changes to these terms' },
  { id: 'contact', label: '14. Contact' },
]

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms govern your access to and use of Qyne's strength &amp; conditioning platform. Please read them carefully — using the service means you accept them."
      path="/terms"
      meta={{ effective: '01 June 2026', version: '1.0' }}
      toc={TOC}
    >
      <p className="text-[14px] leading-relaxed text-faint">
        <strong>Placeholder text.</strong> The contents on this page are dummy
        compliance copy provided for layout and review. They have not been
        reviewed by legal counsel and must not be relied on as Qyne's binding
        terms of service. Final terms will be published before general
        availability.
      </p>

      <LegalSection id="agreement" title="1. Agreement to terms">
        <p>
          By accessing or using the Qyne platform (the <strong>“Service”</strong>),
          you agree to be bound by these Terms of Service (the{' '}
          <strong>“Terms”</strong>) and our Privacy Policy. If you are using the
          Service on behalf of an academy, school, club, or other organisation,
          you represent that you have authority to bind that entity to these
          Terms, in which case <strong>“you”</strong> refers to that entity.
        </p>
        <p>
          The Service is operated by {SITE.legalName} (<strong>“Qyne”</strong>,{' '}
          <strong>“we”</strong>, <strong>“us”</strong>), a private limited
          company incorporated in India.
        </p>
      </LegalSection>

      <LegalSection id="service" title="2. The service">
        <p>
          Qyne provides a coach-supervised strength &amp; conditioning platform
          for sports academies. The Service ingests wearable and self-reported
          inputs, computes readiness signals, and generates draft training plans
          that must be reviewed and approved by a credentialed human coach
          before delivery to athletes.
        </p>
        <p>
          We may update, improve, or remove features of the Service from time to
          time. Where a change materially reduces functionality, we will provide
          reasonable advance notice.
        </p>
      </LegalSection>

      <LegalSection id="accounts" title="3. Accounts & access">
        <LegalList
          items={[
            'You must provide accurate registration information and keep it current.',
            'You are responsible for safeguarding your credentials and for all activity under your account.',
            'Accounts for athletes under 18 require verifiable parental or guardian consent, captured through the onboarding flow.',
            'You must notify us promptly of any unauthorised use of your account.',
          ]}
        />
      </LegalSection>

      <LegalSection id="use" title="4. Acceptable use">
        <p>You agree not to:</p>
        <LegalList
          items={[
            'Use the Service to harm, harass, or surveil any individual.',
            'Reverse-engineer, decompile, or attempt to extract the source code of the Service except to the extent permitted by law.',
            'Use automated means to scrape, mirror, or interfere with the Service.',
            'Upload content you do not have the right to share, or content that is unlawful, defamatory, or infringing.',
            'Bypass access controls, rate limits, or security mechanisms.',
          ]}
        />
      </LegalSection>

      <LegalSection id="content" title="5. Customer content">
        <p>
          You retain ownership of the data your academy and athletes submit to
          the Service (<strong>“Customer Content”</strong>). You grant Qyne a
          limited, non-exclusive licence to host, process, and display Customer
          Content solely to operate the Service for you, to generate plans, and
          to provide support — and as further described in our Privacy Policy.
        </p>
        <p>
          We may use de-identified, aggregated data derived from Customer
          Content to improve our models and product, provided such data cannot
          reasonably be linked back to an individual.
        </p>
      </LegalSection>

      <LegalSection id="fees" title="6. Fees & billing">
        <p>
          Subscription fees, billing cycle, and pilot terms are set out in your
          order form or pilot agreement. Unless stated otherwise, fees are
          payable in Indian Rupees, exclusive of GST, and are non-refundable
          once incurred.
        </p>
        <p>
          We may revise pricing on renewal with at least 30 days' written
          notice. You may decline a price change by terminating your
          subscription before the next renewal.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="7. Intellectual property">
        <p>
          Except for Customer Content, all rights, title, and interest in the
          Service — including the rules engine, models, designs, and trademarks
          — are owned by Qyne or its licensors. No rights are granted to you
          except as expressly set out in these Terms.
        </p>
      </LegalSection>

      <LegalSection id="medical" title="8. Not medical advice">
        <p>
          The Service is a sports performance and training tool. It is{' '}
          <strong>not</strong> a medical device and does not provide medical
          diagnosis, treatment, or advice. Plans generated by Qyne are intended
          to support, not replace, the judgment of qualified coaches and
          medical professionals. Always consult a licensed clinician for
          medical decisions.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="9. Suspension & termination">
        <p>
          We may suspend or terminate your access to the Service if you
          materially breach these Terms, if required by law, or if continued
          provision would create a security or compliance risk. You may
          terminate your subscription at any time as set out in your order
          form. On termination, you may export your Customer Content for 30
          days, after which it will be deleted in accordance with our retention
          schedule.
        </p>
      </LegalSection>

      <LegalSection id="warranties" title="10. Warranties & disclaimers">
        <p>
          To the maximum extent permitted by law, the Service is provided “as
          is” and “as available.” Qyne does not warrant that the Service will
          be uninterrupted, error-free, or that any specific readiness signal
          or plan will prevent injury or improve performance.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="11. Limitation of liability">
        <p>
          To the maximum extent permitted by law, Qyne's aggregate liability
          arising out of or in connection with the Service shall not exceed the
          fees paid by you to Qyne in the twelve months preceding the event
          giving rise to the claim. Qyne shall not be liable for indirect,
          incidental, special, consequential, or punitive damages.
        </p>
      </LegalSection>

      <LegalSection id="law" title="12. Governing law">
        <p>
          These Terms are governed by the laws of India. Any dispute arising
          out of or in connection with these Terms shall be subject to the
          exclusive jurisdiction of the courts of Bangalore, Karnataka.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="13. Changes to these terms">
        <p>
          We may update these Terms from time to time. If a change is material,
          we will notify you by email or through the Service at least 30 days
          before it takes effect. Continued use of the Service after a change
          becomes effective constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="14. Contact">
        <p>
          Questions about these Terms can be sent to{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, or by post
          to {SITE.legalName}, Bangalore, India.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
