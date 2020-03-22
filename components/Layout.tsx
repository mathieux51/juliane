import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Head from './Head'
// import Footer from "components/Footer"
import Overlay from './Overlay'
import GlobalStyle from './GlobalStyle'
import { OverlayContext } from '../context/Overlay'
import { HamburgerContext } from '../context/Hamburger'
import HeaderOverlay from './HeaderOverlay'

const Container = styled.div.attrs({
  className: 'flex fxd-c ai-c'
})`
  width: 100%;
  min-height: 100vh;
  padding: 1rem 0 1rem;
  max-width: 1280px;
  margin: 0 auto;
`

type Props = {}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const { overlayChildren } = React.useContext(OverlayContext)
  const { isOpen } = React.useContext(HamburgerContext)
  return (
    <Container>
      <GlobalStyle />
      <Head />
      <Header />
      <Overlay overlayChildren={overlayChildren} />
      {!isOpen ? children : <HeaderOverlay />}
      {/* <Footer /> */}
    </Container>
  )
}

export default Layout
