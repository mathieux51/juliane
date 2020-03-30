import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
const Section1 = dynamic(() => import('./Section1'))
const Contact = dynamic(() => import('./Contact'))

const Container = styled.div`
  width: 100%;
`

const Main: React.FC = () => (
  <Container>
    <Section1 />
    <Contact />
  </Container>
)

export default Main
