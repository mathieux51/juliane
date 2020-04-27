import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'react-intl'

// import dynamic from 'next/dynamic'
// const Section1 = dynamic(() => import('./Section1'))
// const Contact = dynamic(() => import('./Contact'))
// <Section1 />
// <Contact />

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 184px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.span`
  font-size: 2rem;
  margin-bottom: 10rem;
`

const Main: React.FC = () => {
  const intl = useIntl()
  return (
    <Container>
      <Text>{intl.formatMessage({ id: 'comingSoon' })}</Text>
    </Container>
  )
}

export default Main
