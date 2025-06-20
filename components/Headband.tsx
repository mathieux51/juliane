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
  top: 130px;
  padding: 2rem 0;
  width: 100%;
`

const JobText = styled.p`
  font-size: 16px;
  letter-spacing: 0.05em;
  margin: 0;
`

const NameText = styled.h1`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.15em;
  margin: 8px 0;
  white-space: nowrap;
`

const LocationText = styled.p`
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
      <LocationText>{intl.formatMessage({ id: 'berlinBased' })}</LocationText>
      <NameText>JULIANE HENDERSHOT</NameText>
      <JobText> {intl.formatMessage({ id: 'jobs' })}</JobText>
    </Container>
  )
}

export default Headband
