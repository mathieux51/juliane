import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.bg};
  padding: 2.5rem 0 1.5rem 0;
  font-family: 'IBM Plex Mono', monospace;
  max-width: 1035px;
  width: 100%;
`

const FooterTitle = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.green};
  letter-spacing: 0.05em;
  font-size: 1.15rem;
  margin-bottom: 0.7rem;
  margin-left: 2rem;
  text-transform: uppercase;
  text-align: left;
`

const FooterLine = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.fg};
  margin: 0 2rem 1.2rem 2rem;
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.dgray};
  opacity: 0.85;
`

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  a {
    font-family: 'Unna', serif;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.footerText};
    text-decoration: none;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    &:hover {
      text-decoration: underline;
    }
  }
  .divider {
    font-family: 'Unna', serif;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.footerText};
    opacity: 0.7;
    margin: 0 0.2rem;
    user-select: none;
  }
`

const CopyrightText = styled.div`
  font-family: 'Unna', serif;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.footerText};
`

const Footer: React.FC = () => {
  const intl = useIntl()
  const router = useRouter()
  // Get the current language from the path (e.g., /en/..., /fr/..., /de/...)
  const lang = router.asPath.split('/')[1] || 'en'
  return (
    <FooterContainer>
      <FooterTitle>
        {intl.formatMessage({
          id: 'footer.name',
          defaultMessage: 'JULIANE HENDERSHOT',
        })}
      </FooterTitle>
      <FooterLine />
      <FooterBottom>
        <CopyrightText>
          © 2025{' '}
          {intl.formatMessage({
            id: 'footer.name',
            defaultMessage: 'Juliane Hendershot',
          })}
          .{' '}
          {intl.formatMessage({
            id: 'footer.rights',
            defaultMessage: 'All rights reserved.',
          })}
        </CopyrightText>
        <FooterLinks>
          <a href={`/${lang}/privacy-policy`} tabIndex={0}>
            {intl.formatMessage({
              id: 'footer.privacy',
              defaultMessage: 'Privacy Policy',
            })}
          </a>
          <span className='divider'>|</span>
          <a href={`/${lang}/legal-notices`} tabIndex={0}>
            {intl.formatMessage({
              id: 'footer.legal',
              defaultMessage: 'Legal Notices',
            })}
          </a>
        </FooterLinks>
      </FooterBottom>
    </FooterContainer>
  )
}

export default Footer
