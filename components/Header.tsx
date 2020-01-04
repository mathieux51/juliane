import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import HamburgerButton from './HamburgerButton'
import { OverlayContext } from '../context/Overlay'
import Clapper from './Clapper'
import HeaderOverlay from './HeaderOverlay'

const Header = styled.header.attrs({ className: 'flex jc-sb ai-c' })`
  width: 100%;
`

const Container = styled.a.attrs({ className: 'flex' })``

const TitleContainer = styled.div.attrs({ className: 'flex fxd-c relative' })``

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
`

const StyledClapper = styled(Clapper)`
  width: 18px;
  margin-right: 1rem;
  & > path {
    fill: #2bcdc3;
  }
`

type Props = {}

const _Header: React.FC<Props> = () => {
  const { isOpen, setIsOpen, render } = React.useContext(OverlayContext)

  const handleOnHamburgerClick = () => {
    setIsOpen(!isOpen)
    render(() => <HeaderOverlay />)
  }
  return (
    <Header>
      <Link href='/'>
        <Container>
          <StyledClapper />
          <TitleContainer>
            <Title>Juliane Hendershot</Title>
            <Subtitle>Video Editor</Subtitle>
          </TitleContainer>
        </Container>
      </Link>
      <HamburgerButton onClick={handleOnHamburgerClick} />
    </Header>
  )
}

export default _Header