import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
// import HamburgerButton from './HamburgerButton'
import { HamburgerContext } from '../context/Hamburger'
import Clapper from './Clapper'
import LanguagePicker from './LanguagePicker'

const Header = styled.header.attrs({ className: 'flex jc-sb ai-c sticky' })`
  width: 100vw;
  background: white;
  margin: 0 0 1rem;
  padding: 0 2rem;
  height: 130px;
  z-index: 1;
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
  color: ${({ theme }): string => theme.grey};
`

const StyledClapper = styled(Clapper)`
  width: 18px;
  margin-right: 1rem;
  & > path {
    fill: #2bcdc3;
  }
`

const SubContainer = styled.div.attrs({ className: 'flex ai-c' })``

const StyledLanguagePicker = styled(LanguagePicker)``

// <HamburgerButton onClick={handleOnHamburgerClick} />
//  const handleOnHamburgerClick = (): void => {
//    setIsOpen(!isOpen)
//  }
// const { isOpen, setIsOpen } = React.useContext(HamburgerContext)
const _Header = () => {

  return (
    <Header>
      <Link href='#'>
        <Container>
          <StyledClapper />
          <TitleContainer>
            <Title>Juliane Hendershot</Title>
            <Subtitle>Video Editor</Subtitle>
          </TitleContainer>
        </Container>
      </Link>
      <SubContainer>
        <StyledLanguagePicker />
      </SubContainer>
    </Header>
  )
}

export default _Header
