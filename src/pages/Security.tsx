import { LegalPage, LegalSection, LegalList } from '../components/layout/LegalPage'
import { SITE } from '../lib/site'

const TOC = [
  { id: 'overview', label: '1. Overview' },
  { id: 'infra', label: '2. Infrastructure' },
  { id: 'encryption', label: '3. Encryption' },
  { id: 'access', label: '4. Access controls' },
  { id: 'audit', label: '5. Audit logging' },
  { id: 'sdlc', label: '6. Secure development' },
  { id: 'vendors', label: '7. Vendor management' },
  { id: 'incident', label: '8. Incident response' },
  { id: 'continuity', label: '9. Business continuity' },
  { id: 'minors', label: '10. Protections for minors' },
  { id: 'disclosure', label: '11. Responsible disclosure' },
  { id: 'contact', label: '12. Contact security' },
]

export default function Security() {
  return (
    <LegalPage
      eyebrow="Trust"
      title="Security at Qyne"
      intro="How we protect academy and athlete data — written for the head coach, the academy owner, and the parent who wants to know what happens to their child's information."
      path="/security"
      meta={{ effective: '01 June 2026', version: '1.0' }}
      toc={TOC}
    >
      <p className="text-[14px] leading-relaxed text-faint">
        <strong>Placeholder text.</strong> The contents on this page describe
        the security posture we are building toward. Specific certifications
        and audit attestations will be published as they are completed.
      </p>

      <LegalSection id="overview" title="1. Overview">
        <p>
          Security at Qyne is built around three commitments: keep athlete data
          inside India, restrict access to the smallest set of people and
          systems that need it, and leave a verifiable trail of every action
          that affects a training plan.
        </p>
      </LegalSection>

      <LegalSection id="infra" title="2. Infrastructure">
        <p>
          Qyne runs on managed Indian regions of a Tier-1 cloud provider, with
          redundancy across availability zones. Infrastructure is provisioned
          through code, reviewed in pull requests, and audited continuously.
        </p>
        <LegalList
          items={[
            'Network segmentation between public, application, and data tiers.',
            'Private subnets and security groups deny by default.',
            'Web Application Firewall in front of all public endpoints.',
            'DDoS protection at the edge.',
          ]}
        />
      </LegalSection>

      <LegalSection id="encryption" title="3. Encryption">
        <LegalList
          items={[
            'TLS 1.2+ for all data in transit.',
            'AES-256 encryption at rest for primary databases and object storage.',
            'Customer-managed keys available for federation-tier deployments.',
            'Password storage uses modern memory-hard hashing (Argon2id).',
          ]}
        />
      </LegalSection>

      <LegalSection id="access" title="4. Access controls">
        <p>
          Production access is least-privilege, time-boxed, and reviewed
          quarterly. Engineers receive access only to the systems required to
          do their job; standing administrative access is avoided.
        </p>
        <LegalList
          items={[
            'Single sign-on with mandatory multi-factor authentication.',
            'Just-in-time elevation for sensitive operations with peer approval.',
            'Quarterly access reviews; immediate revocation on role change.',
            'Customer data is never accessed except in response to a support request or a documented incident.',
          ]}
        />
      </LegalSection>

      <LegalSection id="audit" title="5. Audit logging">
        <p>
          Every coach approval, plan edit, consent capture, and administrative
          action is recorded in an append-only audit log. Logs are retained
          for seven years to support compliance review and incident
          reconstruction.
        </p>
      </LegalSection>

      <LegalSection id="sdlc" title="6. Secure development">
        <LegalList
          items={[
            'Code review and CI checks required for every change to production.',
            'Static analysis and dependency vulnerability scanning on each pull request.',
            'Secrets are never committed; rotated through a managed secrets store.',
            'Annual penetration test by an independent third party.',
            'Engineering team receives recurring security training.',
          ]}
        />
      </LegalSection>

      <LegalSection id="vendors" title="7. Vendor management">
        <p>
          Sub-processors are vetted before onboarding, contractually bound to
          equivalent data-protection commitments, and listed publicly. We
          notify customers in advance of material changes to our
          sub-processor list.
        </p>
      </LegalSection>

      <LegalSection id="incident" title="8. Incident response">
        <p>
          We maintain a documented incident response plan with defined roles,
          severity tiers, and communication templates. In the event of a
          confirmed personal data breach affecting a customer, we will:
        </p>
        <LegalList
          items={[
            'Contain and remediate the underlying cause.',
            'Notify the affected customer without undue delay, and within the timeline required by the DPDP Act.',
            'Provide a written incident summary including scope, root cause, and corrective actions.',
            'Notify the Data Protection Board of India where required.',
          ]}
        />
      </LegalSection>

      <LegalSection id="continuity" title="9. Business continuity">
        <p>
          Primary databases are backed up at least daily, with point-in-time
          recovery available for a rolling window. Disaster-recovery
          procedures are documented and tested. Target recovery objectives
          are stated in customer order forms.
        </p>
      </LegalSection>

      <LegalSection id="minors" title="10. Protections for minors">
        <p>
          For athletes under 18, additional controls apply: verifiable
          parental consent before onboarding, no behavioural advertising or
          third-party tracking, parental access to data on request, and a
          documented deletion path. See our{' '}
          <a href="/privacy">Privacy Policy</a> for details.
        </p>
      </LegalSection>

      <LegalSection id="disclosure" title="11. Responsible disclosure">
        <p>
          If you believe you have found a security vulnerability in the Qyne
          platform, please report it to{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with the
          subject line <strong>“Security report”</strong>. We commit to:
        </p>
        <LegalList
          items={[
            'Acknowledge your report within two working days.',
            'Provide a remediation plan within 14 days for confirmed issues.',
            'Not pursue legal action against researchers who act in good faith and within the scope of this policy.',
            'Credit researchers publicly with their permission.',
          ]}
        />
        <p>
          Please do not test against production data, exfiltrate customer
          data, or disrupt the Service for other users.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact security">
        <p>
          For security questions, audit requests, or to request our standard
          security questionnaire response, email{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
