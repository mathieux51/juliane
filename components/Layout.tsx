import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Head from './Head'
// import Footer from "components/Footer"
import Overlay from './Overlay'
import GlobalStyle from './GlobalStyle'
// import { OverlayContext } from '../context/Overlay'

const Container = styled.div.attrs({
  className: 'flex fxd-c ai-c'
})`
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem 2rem 2rem;
`

type Props = {}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  // const { render } = React.useContext(OverlayContext)
  return (
    <Container>
      <GlobalStyle />
      <Head />
      <Header />
      <Overlay />
      {children}
      {/* <Footer /> */}
    </Container>
  )
}

export default Layout
