import React from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';

const LegalNotices: React.FC = () => {
  const intl = useIntl();
  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem' }}>
      <h1>{intl.formatMessage({ id: 'legalNoticesTitle', defaultMessage: 'Impressum' })}</h1>
      <p>{intl.formatMessage({ id: 'legalNoticesText1', defaultMessage: 'Diese Website wird betrieben von Juliane Hendershot. Für rechtliche Anfragen nutzen Sie bitte das Kontaktformular.' })}</p>
      <Link href="/de/privacy-policy">{intl.formatMessage({ id: 'privacyPolicyTitle', defaultMessage: 'Datenschutzerklärung' })}</Link>
    </div>
  );
};

export default LegalNotices; 