import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import { media } from '../helpers/helpers'

const FooterSection = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.charcoal};
  padding: 64px 24px 32px;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${media.medium`
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 80px;
  `}
`

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Logo = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  letter-spacing: -0.02em;
`

const Tagline = styled.p`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  max-width: 300px;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const LinksTitle = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const FooterLink = styled.a`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.white};
  }
`

const FooterButton = styled.button`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  transition: color 0.2s ease;
  font-family: inherit;

  &:hover {
    color: ${({ theme }) => theme.white};
  }
`

const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 32px;
  align-items: center;
  text-align: center;

  ${media.medium`
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  `}
`

const Copyright = styled.span`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
`

const LegalLinks = styled.div`
  display: flex;
  gap: 24px;
`

const LegalLink = styled.a`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`

const Footer: React.FC = () => {
  const intl = useIntl()
  const router = useRouter()
  const lang = router.asPath.split('/')[1] || 'en'

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <FooterSection>
      <Container>
        <TopRow>
          <BrandSection>
            <Logo>Juliane Hendershot</Logo>
            <Tagline>
              {intl.formatMessage({
                id: 'footer.tagline',
                defaultMessage:
                  'Professional video editor crafting compelling visual stories for brands and creators.',
              })}
            </Tagline>
            <SocialLinks>
              <SocialLink
                href='https://www.linkedin.com/in/julianehendershot/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <svg fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </SocialLink>
              <SocialLink
                href='https://www.instagram.com/jr_hendershot/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <svg fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
                </svg>
              </SocialLink>
            </SocialLinks>
          </BrandSection>

          <LinksColumn>
            <LinksTitle>
              {intl.formatMessage({
                id: 'footer.navigation',
                defaultMessage: 'Navigation',
              })}
            </LinksTitle>
            <LinksList>
              <FooterButton onClick={() => handleScrollToSection('work')}>
                {intl.formatMessage({
                  id: 'nav.work',
                  defaultMessage: 'Work',
                })}
              </FooterButton>
              <FooterButton onClick={() => handleScrollToSection('about')}>
                {intl.formatMessage({
                  id: 'nav.about',
                  defaultMessage: 'About',
                })}
              </FooterButton>
              <FooterButton onClick={() => handleScrollToSection('contact')}>
                {intl.formatMessage({
                  id: 'contact',
                  defaultMessage: 'Contact',
                })}
              </FooterButton>
            </LinksList>
          </LinksColumn>

          <LinksColumn>
            <LinksTitle>
              {intl.formatMessage({
                id: 'footer.contact',
                defaultMessage: 'Contact',
              })}
            </LinksTitle>
            <LinksList>
              <FooterLink href='mailto:contact@julianehendershot.com'>
                contact@julianehendershot.com
              </FooterLink>
              <FooterLink as='span'>Montpellier, France</FooterLink>
              <FooterLink as='span'>Berlin, Germany</FooterLink>
            </LinksList>
          </LinksColumn>
        </TopRow>

        <BottomRow>
          <Copyright>
            © {new Date().getFullYear()}{' '}
            {intl.formatMessage({
              id: 'footer.name',
              defaultMessage: 'Juliane Hendershot',
            })}
            .{' '}
            {intl.formatMessage({
              id: 'footer.rights',
              defaultMessage: 'All rights reserved.',
            })}
          </Copyright>

          <LegalLinks>
            <LegalLink href={`/${lang}/privacy-policy`}>
              {intl.formatMessage({
                id: 'footer.privacy',
                defaultMessage: 'Privacy Policy',
              })}
            </LegalLink>
            <LegalLink href={`/${lang}/legal-notices`}>
              {intl.formatMessage({
                id: 'footer.legal',
                defaultMessage: 'Legal Notices',
              })}
            </LegalLink>
          </LegalLinks>
        </BottomRow>
      </Container>
    </FooterSection>
  )
}

export default Footer
