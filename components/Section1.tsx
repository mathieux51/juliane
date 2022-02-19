import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
// import { media } from '../helpers/helpers'

const Youtube = dynamic(() => import('./Youtube'), {
  ssr: false,
})

const Container = styled.section`
  width: calc(100% - 4rem);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  border: 1px solid red;
  & > article {
    flex: 200px;
    min-height: 200px;
    margin: 1rem;
    padding: 0 auto;
  }
`

const StyledYoutube = styled(Youtube)``

type Props = {
  className?: string
}

const Section1: React.FC<Props> = ({ className }) => (
  <Container className={className}>
    <StyledYoutube />
    <StyledYoutube />
    <StyledYoutube />
    <StyledYoutube />
    <StyledYoutube />
    <StyledYoutube />
    <StyledYoutube />
    <StyledYoutube />
    <StyledYoutube />
  </Container>
)

export default Section1
