import React from 'react'
import styled from 'styled-components'
import Section1 from './Section1'
import Contact from './Contact'
// const Vimeo = dynamic(() => import('./Vimeo'), {
//   ssr: false
// })
// <Vimeo />
const Container = styled.div`
  width: 100%;
`

function Main() {
  return (
    <Container>
      <Section1 />
      <Contact />
    </Container>
  )
}

export default Main
