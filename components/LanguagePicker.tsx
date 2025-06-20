import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'
import EnglishFlag from '../components/EnglishFlag'
import FrenchFlag from '../components/FrenchFlag'
import GermanFlag from '../components/GermanFlag'
import Earth from './Earth'
import useClickOutside from '../hooks/useClickOutside'
import elementInvisible from '../style/elementInvisible'

const Container = styled.div``

const StyledEarth = styled(Earth)`
  width: 22px;
  fill: #2bcdc3;
`

type UlProps = {
  isOpen: boolean
}

const Ul = styled.ul.attrs<UlProps>({ className: 'absolute' })`
  border-radius: 8px;
  top: 2rem;
  right: -50%;
  padding: 0;
  margin: 0;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  ${({ isOpen }: { isOpen: boolean }) => (isOpen ? css`` : elementInvisible)}
`

const Li = styled.li``

const A = styled.a.attrs({ className: 'flex ai-c jc-sb' })`
  width: 120px;
  margin: 1rem;
  & > svg {
    width: 40px;
  }
`

type Props = {
  className?: string
}

const LanguagePicker: React.FC<Props> = ({ className }) => {
  // const buttonRef: React.RefObject<HTMLButtonElement> = React.createRef()
  const buttonRef = React.createRef<HTMLButtonElement>()
  const [isOpen, setIsOpen] = React.useState(false)

  const handle = (): void => setIsOpen(!isOpen)
  const handleClose = (): void => {
    if (!isOpen) {
      return
    }
    setIsOpen(false)
  }
  useClickOutside(buttonRef, handleClose)

  return (
    <Container className={`relative ${className}`}>
      <Button onClick={handle} aria-label='language picker' ref={buttonRef}>
        <StyledEarth />
      </Button>
      <Ul isOpen={isOpen}>
        <Li>
          <A href='/en'>
            English <EnglishFlag />
          </A>
        </Li>
        <Li>
          <A href='/fr'>
            French <FrenchFlag />
          </A>
        </Li>
        <Li>
          <A href='/de'>
            German <GermanFlag />
          </A>
        </Li>
      </Ul>
    </Container>
  )
}

export default LanguagePicker
