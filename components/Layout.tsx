import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Head from './Head'
// import Footer from "components/Footer"
// import Overlay from './Overlay'
import GlobalStyle from './GlobalStyle'
// import { OverlayContext } from '../context/Overlay'

const Container = styled.div.attrs({
  className: 'flex fxd-c ai-c',
})`
  width: 100%;
`

type Props = {
  children: React.ReactNode
}

// <Overlay overlayChildren={overlayChildren} />
const Layout: React.FC<Props> = ({ children }) => {
  // const { overlayChildren } = React.useContext(OverlayContext)
  return (
    <Container>
      <GlobalStyle />
      <Head />
      <Header />
      {children}
      {/* <Footer /> */}
    </Container>
  )
}

export default Layout
