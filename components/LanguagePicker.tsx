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
const StyledButton = styled(Button)``

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

  const [isOpen, setIsOpen] = React.useState(false)
  // const [selectedLanguage, setSelectedLanguage] = React.useState(language)

  const handle = () => setIsOpen(!isOpen)

  return (
    <Container className={`relative ${className}`}>
      <StyledButton onClick={handle}>
        <StyledEarth />
      </StyledButton>
      {isOpen && (
        <Ul>
          <Li>
            <Link href='/en'>
              <A onClick={handle}>
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
