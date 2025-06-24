import React from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';

const LegalNotices: React.FC = () => {
  const intl = useIntl();
  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem' }}>
      <h1>{intl.formatMessage({ id: 'legalNoticesTitle', defaultMessage: 'Mentions légales' })}</h1>
      <p>{intl.formatMessage({ id: 'legalNoticesText1', defaultMessage: 'Ce site est exploité par Juliane Hendershot. Pour toute question juridique, veuillez utiliser le formulaire de contact.' })}</p>
      <Link href="/fr/privacy-policy">{intl.formatMessage({ id: 'privacyPolicyTitle', defaultMessage: 'Politique de confidentialité' })}</Link>
    </div>
  );
};

export default LegalNotices; 