import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'
import EnglishFlag from '../components/EnglishFlag'
import FrenchFlag from '../components/FrenchFlag'
import GermanFlag from '../components/GermanFlag'
import Earth from './Earth'
import useClickOutside from '../hooks/useClickOutside'
import elementInvisible from '../style/elementInvisible'
import { useRouter } from 'next/router'

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

const LangButton = styled.button.attrs({ className: 'flex ai-c jc-sb' })`
  width: 120px;
  margin: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > svg {
    width: 40px;
  }
`

type Props = {
  className?: string
}

const LanguagePicker: React.FC<Props> = ({ className }) => {
  const buttonRef = React.createRef<HTMLButtonElement>()
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()

  const handle = (): void => setIsOpen(!isOpen)
  const handleClose = (): void => {
    if (!isOpen) {
      return
    }
    setIsOpen(false)
  }
  useClickOutside(buttonRef, handleClose)

  // Get current path and replace the language segment
  const { asPath } = router
  // Supported languages
  const languages = [
    { code: 'en', label: 'English', Flag: EnglishFlag },
    { code: 'fr', label: 'French', Flag: FrenchFlag },
    { code: 'de', label: 'German', Flag: GermanFlag },
  ]

  const getTargetPath = (lang: string) => {
    // Separate path from query/hash
    const [pathname, searchAndHash = ''] = asPath.split(/([?#].*)/)
    // Remove trailing slash for consistency (except for root)
    const cleanPath =
      pathname.length > 1 && pathname.endsWith('/')
        ? pathname.slice(0, -1)
        : pathname
    const parts = cleanPath.split('/')
    // If first part is empty (because path starts with /), second part is the lang
    if (['en', 'fr', 'de'].includes(parts[1])) {
      parts[1] = lang
      const newPath = parts.join('/') || '/'
      return `${newPath}${searchAndHash}`
    } else if (parts.length === 1 && parts[0] === '') {
      // root path
      return `/${lang}${searchAndHash}`
    } else {
      // If no lang in path, just prefix
      return `/${lang}${cleanPath.startsWith('/') ? '' : '/'}${cleanPath}${searchAndHash}`
    }
  }

  const handleLangClick = (lang: string) => {
    const target = getTargetPath(lang)
    router.push(target)
    setIsOpen(false)
  }

  return (
    <Container className={`relative ${className}`}>
      <Button onClick={handle} aria-label='language picker' ref={buttonRef}>
        <StyledEarth />
      </Button>
      <Ul isOpen={isOpen}>
        {languages.map(({ code, label, Flag }) => (
          <Li key={code}>
            <LangButton type='button' onClick={() => handleLangClick(code)}>
              {label} <Flag />
            </LangButton>
          </Li>
        ))}
      </Ul>
    </Container>
  )
}

export default LanguagePicker
