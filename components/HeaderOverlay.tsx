import React from 'react'
import styled from 'styled-components'
import { HamburgerContext } from '../context/Hamburger'
import Link from 'next/link'

const Container = styled.div`
  width: 100%;
  border-radius: 4px;
`

const A = styled.a.attrs({ className: '' })`
  font-size: 1rem;
  line-height: 1.6em;
  color: #000;
  padding: 1rem;
  width: 200px;
  border-radius: 4px;
  &:hover,
  &:focus {
    background: #ededf0;
  }
  text-align: center;
`

type Props = {
  className?: string
}

const HeaderOverlay: React.FC<Props> = ({ className }) => {
  const { isOpen, setIsOpen } = React.useContext(HamburgerContext)
  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container className={`flex ai-s ${className || ''}`}>
      <Link href='/'>
        <A onClick={handleOnClick}>Home</A>
      </Link>
      <Link href='/about'>
        <A onClick={handleOnClick}>About</A>
      </Link>
      <Link href='/contact'>
        <A onClick={handleOnClick}>Contact</A>
      </Link>
    </Container>
  )
}

export default HeaderOverlay
