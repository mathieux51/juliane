import React from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'

const PrivacyPolicy: React.FC = () => {
  const intl = useIntl()
  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem' }}>
      <h1>
        {intl.formatMessage({
          id: 'privacyPolicyTitle',
          defaultMessage: 'Privacy Policy',
        })}
      </h1>
      <p>
        {intl.formatMessage({
          id: 'privacyPolicyText1',
          defaultMessage:
            'This website respects your privacy. We do not collect personal data except what you provide through the contact form. Your information will never be shared with third parties.',
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: 'privacyPolicyText2',
          defaultMessage: 'For more information, please contact us.',
        })}
      </p>
      <Link href='/en/legal-notices'>
        {intl.formatMessage({
          id: 'legalNoticesTitle',
          defaultMessage: 'Legal Notices',
        })}
      </Link>
    </div>
  )
}

export default PrivacyPolicy
