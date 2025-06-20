import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Head from './Head'
import GlobalStyle from './GlobalStyle'

const Container = styled.div.attrs({
  className: 'flex fxd-c ai-c',
})`
  width: 100%;
`

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Head />
      <Header />
      {children}
    </Container>
  )
}

export default Layout
