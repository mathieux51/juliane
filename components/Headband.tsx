import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.green};
  position: absolute;
  top: 69px;
  padding: 2rem 0;
  width: 100%;
`

const TextContainer = styled.div`
  max-width: 978px;
  width: 100%;
`

const JobText = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  letter-spacing: 0.05em;
  margin: 0;
`

const NameText = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.15em;
  margin: 8px 0;
  white-space: nowrap;
`

const LocationText = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  letter-spacing: 0.05em;
  margin: 0;
`

type Props = {
  className?: string
}

const Headband: React.FC<Props> = ({ className }) => {
  const intl = useIntl()
  return (
    <Container className={className}>
      <TextContainer>
        <LocationText>{intl.formatMessage({ id: 'berlinBased' })}</LocationText>
        <NameText>JULIANE HENDERSHOT</NameText>
        <JobText> {intl.formatMessage({ id: 'jobs' })}</JobText>
      </TextContainer>
    </Container>
  )
}

export default Headband
