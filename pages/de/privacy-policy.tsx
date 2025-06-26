import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
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

const PrivacyPolicy: React.FC = () => {
  const intl = useIntl()
  return (
    <>
      <Banner>
        <BannerContent>
          <Breadcrumb>
            <Link href="/de">Home</Link> &nbsp;»&nbsp;{intl.formatMessage({ id: 'privacy.bannerTitle' })}
          </Breadcrumb>
          <BannerTitle>
            {intl.formatMessage({ id: 'privacy.bannerTitle' })}
          </BannerTitle>
        </BannerContent>
      </Banner>
      <Container>
        <SectionTitle>
          {intl.formatMessage({ id: 'privacy.dataTitle' })}
        </SectionTitle>
        <SectionText>
          {intl.formatMessage({ id: 'privacy.dataText' })}
        </SectionText>
        <SectionTitle>
          {intl.formatMessage({ id: 'privacy.cookiesTitle' })}
        </SectionTitle>
        <SectionText>
          {intl.formatMessage({ id: 'privacy.cookiesText' })}
        </SectionText>
        <SectionTitle>
          {intl.formatMessage({ id: 'privacy.embeddedTitle' })}
        </SectionTitle>
        <SectionText>
          {intl.formatMessage({ id: 'privacy.embeddedText' })}
        </SectionText>
      </Container>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
