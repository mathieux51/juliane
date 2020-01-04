import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { OverlayContext } from '../context/Overlay'
import Button from './Button'

const Container = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 4px;
`

const StyledButton = styled(Button).attrs({ className: 'absolute' })`
  top: 1.5rem;
  right: 2rem;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  &:hover,
  &:focus {
    background: #ededf0;
  }
`

const A = styled.a.attrs({ className: 'ta-l' })`
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
`

type Props = {
  className?: string
}

const HeaderOverlay: React.FC<Props> = ({ className }) => {
  const { isOpen, setIsOpen } = React.useContext(OverlayContext)
  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container className={`flex fxd-c ai-s ${className}`}>
      <StyledButton onClick={handleOnClick}>X</StyledButton>
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
