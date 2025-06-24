import React from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';

const LegalNotices: React.FC = () => {
  const intl = useIntl();
  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem' }}>
      <h1>{intl.formatMessage({ id: 'legalNoticesTitle', defaultMessage: 'Legal Notices' })}</h1>
      <p>{intl.formatMessage({ id: 'legalNoticesText1', defaultMessage: 'This website is operated by Juliane Hendershot. For any legal inquiries, please use the contact form.' })}</p>
      <Link href="/en/privacy-policy">{intl.formatMessage({ id: 'privacyPolicyTitle', defaultMessage: 'Privacy Policy' })}</Link>
    </div>
  );
};

export default LegalNotices; 