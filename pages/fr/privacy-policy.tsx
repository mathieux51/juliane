import React from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';

const PrivacyPolicy: React.FC = () => {
  const intl = useIntl();
  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem' }}>
      <h1>{intl.formatMessage({ id: 'privacyPolicyTitle', defaultMessage: 'Politique de confidentialité' })}</h1>
      <p>{intl.formatMessage({ id: 'privacyPolicyText1', defaultMessage: 'Ce site respecte votre vie privée. Nous ne collectons aucune donnée personnelle sauf celles que vous fournissez via le formulaire de contact. Vos informations ne seront jamais partagées avec des tiers.' })}</p>
      <p>{intl.formatMessage({ id: 'privacyPolicyText2', defaultMessage: "Pour plus d'informations, veuillez nous contacter." })}</p>
      <Link href="/fr/legal-notices">{intl.formatMessage({ id: 'legalNoticesTitle', defaultMessage: 'Mentions légales' })}</Link>
    </div>
  );
};

export default PrivacyPolicy; 