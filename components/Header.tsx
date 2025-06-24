import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'

// Dynamic import to avoid SSR issues
const ReactCountryFlag = React.lazy(() => import('react-country-flag'))

const StyledHeader = styled.header.attrs({
  className: 'flex jc-sb ai-c sticky',
})`
  background: ${({ theme }) => theme.grey};
  padding: 20px 0;
  width: 100%;
  z-index: 1;
`

const Container = styled.div.attrs({ className: 'flex jc-sb ai-c' })`
  max-width: 1000px;
  margin: auto;
  width: 100%;
  padding: 0 24px;
`

const RightMenu = styled.div.attrs({ className: 'flex ai-c' })`
  gap: 20px;
  margin-left: auto;
`

const ContactButton = styled.button`
  background: none;
  border: none;
  color: #225b30;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;
  font-family: 'IBM Plex Mono', monospace;
  &:hover {
    text-decoration: underline;
  }
`

const LanguageSelectorContainer = styled.div`
  position: relative;
`

const LanguageButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 60px;
  &:hover {
    background-color: #f5f5f5;
  }
`

const LanguageDropdown = styled.ul`
  position: absolute;
  top: 2.5em;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  margin: 0;
  padding: 0;
  z-index: 10;
  min-width: 80px;
  list-style: none;
`

const LanguageOption = styled.li`
  list-style: none;
  padding: 0;
`

const LanguageOptionButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`

const FlagFallback = styled.span`
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  background-color: #ddd;
  border-radius: 2px;
  text-align: center;
  line-height: 1.5em;
  font-size: 0.8em;
  font-weight: bold;
`

const Header = () => {
  const [preferredLang, setPreferredLang] = React.useState<string>('en')
  const [isClient, setIsClient] = React.useState(false)
  const intl = useIntl()
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      const lang = (window as any).__SERVER_STATE__?.language ?? 'en'
      setPreferredLang(lang)
    }
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleCustomLanguageChange = (langCode: string) => {
    // Force a full page reload to ensure the new language is properly loaded
    window.location.href = `/${langCode}`
    setIsOpen(false)
  }

  const handleContactScroll = () => {
    const el = document.getElementById('contact')
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const allLanguages = [
    { code: 'en', label: 'EN', countryCode: 'GB' },
    { code: 'fr', label: 'FR', countryCode: 'FR' },
    { code: 'de', label: 'DE', countryCode: 'DE' },
  ]

  // Move preferredLang to the top of the list
  const sortedLanguages = preferredLang
    ? [
        allLanguages.find((l) => l.code === preferredLang)!,
        ...allLanguages.filter((l) => l.code !== preferredLang),
      ]
    : allLanguages

  const currentLanguage = allLanguages.find((l) => l.code === preferredLang) || allLanguages[0]

  const renderFlag = (countryCode: string) => {
    if (!isClient) {
      return <FlagFallback>{countryCode}</FlagFallback>
    }
    
    return (
      <React.Suspense fallback={<FlagFallback>{countryCode}</FlagFallback>}>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{ width: '1.5em', height: '1.5em', verticalAlign: 'middle' }}
        />
      </React.Suspense>
    )
  }

  return (
    <StyledHeader>
      <Container>
        <RightMenu>
          <LanguageSelectorContainer ref={dropdownRef}>
            <LanguageButton
              onClick={() => setIsOpen((open) => !open)}
              aria-label='Select language'
            >
              {renderFlag(currentLanguage.countryCode)}
              {preferredLang.toUpperCase()}
            </LanguageButton>
            {isOpen && (
              <LanguageDropdown>
                {sortedLanguages.map((lang) => (
                  <LanguageOption key={lang.code}>
                    <LanguageOptionButton
                      onClick={() => handleCustomLanguageChange(lang.code)}
                    >
                      {renderFlag(lang.countryCode)}
                      {lang.label}
                    </LanguageOptionButton>
                  </LanguageOption>
                ))}
              </LanguageDropdown>
            )}
          </LanguageSelectorContainer>
          <ContactButton onClick={handleContactScroll}>
            {intl.formatMessage({ id: 'contact', defaultMessage: 'Contact' })}
          </ContactButton>
        </RightMenu>
      </Container>
    </StyledHeader>
  )
}

export default Header
