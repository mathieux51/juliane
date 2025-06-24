import React from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';

const PrivacyPolicy: React.FC = () => {
  const intl = useIntl();
  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem' }}>
      <h1>{intl.formatMessage({ id: 'privacyPolicyTitle', defaultMessage: 'Datenschutzerklärung' })}</h1>
      <p>{intl.formatMessage({ id: 'privacyPolicyText1', defaultMessage: 'Diese Website respektiert Ihre Privatsphäre. Wir erheben keine personenbezogenen Daten, außer denjenigen, die Sie über das Kontaktformular bereitstellen. Ihre Informationen werden niemals an Dritte weitergegeben.' })}</p>
      <p>{intl.formatMessage({ id: 'privacyPolicyText2', defaultMessage: 'Für weitere Informationen kontaktieren Sie uns bitte.' })}</p>
      <Link href="/de/legal-notices">{intl.formatMessage({ id: 'legalNoticesTitle', defaultMessage: 'Impressum' })}</Link>
    </div>
  );
};

export default PrivacyPolicy; 