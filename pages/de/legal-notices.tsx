import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Footer = dynamic(() => import('../../components/Footer'))

const Banner = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.green};
  padding: 2.5rem 0 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`

const BannerContent = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`

const Breadcrumb = styled.div`
  font-family: 'Unna', serif;
  font-size: 16px;
  font-weight: 400;
  color: #c4c4c4;
  margin-bottom: 1.2rem;
`

const BreadcrumbLink = styled.a`
  color: #c4c4c4;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const BannerTitle = styled.h1`
  color: ${({ theme }) => theme.white};
  font-family: 'IBM Plex Mono', monospace;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0;
  align-self: flex-start;
  text-align: left;
`

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
`

const IntroText = styled.p`
  font-family: 'Unna', serif;
  font-size: 16px;
  font-weight: 400;
  color: #222;
  margin-bottom: 1.5rem;
`

const SectionTitle = styled.h2`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 16px;
  font-weight: 700;
  color: #225b30;
  margin-top: 2.5rem;
  margin-bottom: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const SectionText = styled.p`
  font-family: 'Unna', serif;
  font-size: 16px;
  font-weight: 400;
  color: #222;
  margin-bottom: 1.2rem;
`

const LegalNotices: React.FC = () => {
  const intl = useIntl()
  return (
    <>
      <Banner>
        <BannerContent>
          <Breadcrumb>
            <Link href='/de' passHref>
              <BreadcrumbLink>
                {intl.formatMessage({ id: 'home' })}
              </BreadcrumbLink>
            </Link>
            {intl.formatMessage({ id: 'breadcrumbSeparator' })}
            {intl.formatMessage({ id: 'legalNotices' })}
          </Breadcrumb>
          <BannerTitle>
            {intl.formatMessage({ id: 'legal.bannerTitle' })}
          </BannerTitle>
        </BannerContent>
      </Banner>
      <Container>
        <IntroText>{intl.formatMessage({ id: 'legal.intro' })}</IntroText>
        <SectionTitle>
          {intl.formatMessage({ id: 'legal.publisherTitle' })}
        </SectionTitle>
        <SectionText>
          {intl.formatMessage({ id: 'legal.publisherText' })}
        </SectionText>
        <SectionTitle>
          {intl.formatMessage({ id: 'legal.hostTitle' })}
        </SectionTitle>
        <SectionText>
          {intl.formatMessage({ id: 'legal.hostText' })}
        </SectionText>
        <SectionTitle>
          {intl.formatMessage({ id: 'legal.ipTitle' })}
        </SectionTitle>
        <SectionText>{intl.formatMessage({ id: 'legal.ipText' })}</SectionText>
      </Container>
      <Footer />
    </>
  )
}

export default LegalNotices
