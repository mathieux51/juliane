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
const styles = `
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  letter-spacing: 0.07em;
  margin: 6px;
`

const Title = styled.h2`
  ${styles}
  color: ${({ theme }) => theme.white};
`

const UnderText = styled.h2`
  ${styles}
  color: ${({ theme }) => theme.white};
  word-break: break-word;
  text-align: center;
`

type Props = {
  className?: string
}

const Headband: React.FC<Props> = ({ className }) => {
  const intl = useIntl()
  return (
    <Container className={className}>
      <Title> {intl.formatMessage({ id: 'berlinBased' })}</Title>
      <UnderText> {intl.formatMessage({ id: 'jobs' })}</UnderText>
    </Container>
  )
}

export default Headband
