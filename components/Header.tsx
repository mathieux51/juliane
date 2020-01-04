import React from 'react'
import styled from 'styled-components'
import HamburgerButton from './HamburgerButton'
import { OverlayContext } from '../context/Overlay'

const Header = styled.header.attrs({ className: 'flex jc-sb ai-c' })`
  width: 100%;
`

const TitleContainer = styled.div.attrs({ className: 'flex fxd-c' })``

const Title = styled.h1`
  font-size: 1.25rem;
  margin: 0;
  font-weight: normal;
  list-style: none;
  line-height: 1.6em;
  font-weight: 500;
  font-style: normal;
  color: #000;
`

const Subtitle = styled.h2`
  font-size: 0.75rem;
  margin: 0;
  font-weight: normal;
  line-height: 1.4em;
  letter-spacing: 0.04em;
  font-weight: 400;
  font-style: normal;
  color: #aaa;
  margin-top: 0.5em;
`

// function Links() {
//   return (
//     <>
//       <Link href='/'>
//         <a>Home</a>
//       </Link>
//       <Link href='/about'>
//         <a>About</a>
//       </Link>
//       <Link href='/contact'>
//         <a>Contact</a>
//       </Link>
//     </>
//   )
// }

type Props = {}

const _Header: React.FC<Props> = () => {
  const { isOpen, setIsOpen } = React.useContext(OverlayContext)

  const handleOnHamburgerClick = () => {
    setIsOpen(!isOpen)
    // render(() => <pre>🦉</pre>)
  }
  return (
    <Header>
      <TitleContainer>
        <Title>Juliane Hendershot</Title>
        <Subtitle>Video Editor</Subtitle>
      </TitleContainer>
      <HamburgerButton onClick={handleOnHamburgerClick} />
    </Header>
  )
}

export default _Header
