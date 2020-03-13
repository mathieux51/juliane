import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Link from 'next/link'
// import { LanguageContext } from '../context/Language'
import EnglishFlag from '../components/EnglishFlag'
import FrenchFlag from '../components/FrenchFlag'
import GermanFlag from '../components/GermanFlag'
import Earth from './Earth'

const Container = styled.div``

const StyledEarth = styled(Earth)`
  width: 22px;
  fill: #2bcdc3;
`

const Ul = styled.ul.attrs({ className: 'absolute' })`
  border-radius: 8px;
  top: 2rem;
  right: -50%;
  padding: 0;
  margin: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
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
  // const { language } = React.useContext(LanguageContext)
  const ulRef = React.useRef<HTMLUListElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const [isOpen, setIsOpen] = React.useState(false)
  // const [selectedLanguage, setSelectedLanguage] = React.useState(language)

  const handle = () => setIsOpen(!isOpen)

  const handleBlur = (
    evt: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    evt.preventDefault()
    evt.stopPropagation()
    const ul = ulRef.current
    const button = buttonRef.current
    const t = evt.relatedTarget

    console.log(t)
    // Blur should trigger close when the click is outisde of the popup
    // Careful with Safari if you change this
    const shouldClose = isOpen
    button && !button.contains(t as Node) && ul && !ul.contains(t as Node)

    console.log(shouldClose)

    if (shouldClose) {
      setIsOpen(false)
    }
  }

  return (
    <Container className={`relative ${className}`}>
      <Button onClick={handle} ref={buttonRef} onBlur={handleBlur}>
        <StyledEarth />
      </Button>
      {isOpen && (
        <Ul ref={ulRef}>
          <Li>
            <Link href='/en'>
              <A onClick={handle} onBlur={handleBlur}>
                English <EnglishFlag />
              </A>
            </Link>
          </Li>
          <Li>
            <Link href='/fr'>
              <A onClick={handle}>
                French <FrenchFlag />
              </A>
            </Link>
          </Li>
          <Li>
            <Link href='/de'>
              <A onClick={handle}>
                German <GermanFlag />
              </A>
            </Link>
          </Li>
        </Ul>
      )}
    </Container>
  )
}

export default LanguagePicker
