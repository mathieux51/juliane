import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import { media } from '../helpers/helpers'

// Dynamic import to avoid SSR issues
const ReactCountryFlag = React.lazy(() => import('react-country-flag'))

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.bg};
  padding: 12px 0;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.borderLight};
  backdrop-filter: blur(10px);
  background: rgba(250, 250, 248, 0.95);

  ${media.small`
    padding: 16px 0;
  `}
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.small`
    padding: 0 24px;
  `}
`

const Logo = styled.a`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: -0.02em;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.borderLight};
  padding: 16px;
  gap: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  ${media.small`
    display: flex;
    flex-direction: row;
    position: static;
    background: transparent;
    border-bottom: none;
    padding: 0;
    gap: 8px;
    box-shadow: none;
  `}

  ${media.medium`
    gap: 16px;
  `}
`

const NavLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-family: inherit;
  text-align: left;
  width: 100%;

  ${media.small`
    padding: 8px 12px;
    width: auto;
    text-align: center;
  `}

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
    background: ${({ theme }) => theme.warmGrey};
  }
`

const MobileCVLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-family: inherit;
  background: ${({ theme }) => theme.bg};

  ${media.small`
    display: none;
  `}

  svg {
    width: 18px;
    height: 18px;
  }
`

const CVButton = styled.a`
  display: none;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    background: ${({ theme }) => theme.primaryLight};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(30, 58, 95, 0.25);
  }

  ${media.small`
    display: inline-flex;
  `}

  svg {
    width: 16px;
    height: 16px;
  }
`

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.textSecondary};
  margin-left: 8px;

  ${media.small`
    display: none;
  `}

  svg {
    width: 24px;
    height: 24px;
  }
`

const LanguageSelectorContainer = styled.div`
  position: relative;
`

const LanguageButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.textSecondary};
  transition: all 0.2s ease;
  font-family: inherit;

  ${media.small`
    padding: 6px 10px;
    font-size: 13px;
    gap: 6px;
  `}

  &:hover {
    border-color: ${({ theme }) => theme.textMuted};
    background: ${({ theme }) => theme.warmGrey};
  }
`

const LanguageDropdown = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 6px;
  z-index: 10;
  min-width: 100px;
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
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.textSecondary};
  transition: all 0.15s ease;
  font-family: inherit;

  &:hover {
    background: ${({ theme }) => theme.warmGrey};
    color: ${({ theme }) => theme.textPrimary};
  }
`

const FlagFallback = styled.span`
  width: 1.2em;
  height: 1.2em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.lightGrey};
  border-radius: 2px;
  font-size: 0.7em;
  font-weight: 600;
  color: ${({ theme }) => theme.textMuted};
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${media.small`
    gap: 12px;
  `}
`

const ALL_LANGUAGES = [
  { code: 'en', label: 'EN', countryCode: 'GB' },
  { code: 'fr', label: 'FR', countryCode: 'FR' },
  { code: 'de', label: 'DE', countryCode: 'DE' },
] as const

const Header = () => {
  const [preferredLang, setPreferredLang] = React.useState<string>('en')
  const [isClient, setIsClient] = React.useState(false)
  const intl = useIntl()
  const router = useRouter()
  const [isLangOpen, setIsLangOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lang = (window as any).__SERVER_STATE__?.language ?? 'en'
      setPreferredLang(lang)
    }
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false)
      }
    }

    if (isLangOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLangOpen])

  const handleCustomLanguageChange = (langCode: string) => {
    window.location.href = `/${langCode}`
    setIsLangOpen(false)
  }

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const mainPages = ALL_LANGUAGES.map((l) => `/${l.code}`)
    const mainPagesWithSlash = ALL_LANGUAGES.map((l) => `/${l.code}/`)
    const currentPath = router.asPath.split(/[?#]/)[0]
    const isMainPage =
      mainPages.includes(currentPath) ||
      mainPagesWithSlash.includes(currentPath)

    if (isMainPage) {
      const el = document.getElementById(sectionId)
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 70
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    } else {
      window.location.href = `/${preferredLang}#${sectionId}`
    }
  }

  const sortedLanguages = preferredLang
    ? [
        ALL_LANGUAGES.find((l) => l.code === preferredLang)!,
        ...ALL_LANGUAGES.filter((l) => l.code !== preferredLang),
      ]
    : [...ALL_LANGUAGES]

  const currentLanguage =
    ALL_LANGUAGES.find((l) => l.code === preferredLang) || ALL_LANGUAGES[0]

  const renderFlag = (countryCode: string) => {
    if (!isClient) {
      return <FlagFallback>{countryCode}</FlagFallback>
    }

    return (
      <React.Suspense fallback={<FlagFallback>{countryCode}</FlagFallback>}>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{ width: '1.2em', height: '1.2em', verticalAlign: 'middle' }}
        />
      </React.Suspense>
    )
  }

  return (
    <StyledHeader>
      <Container>
        <Logo href={`/${preferredLang}`}>JH</Logo>

        <Nav $isOpen={isMobileMenuOpen}>
          <NavLink onClick={() => handleNavClick('work')}>
            {intl.formatMessage({ id: 'nav.work', defaultMessage: 'Work' })}
          </NavLink>
          <NavLink onClick={() => handleNavClick('about')}>
            {intl.formatMessage({ id: 'nav.about', defaultMessage: 'About' })}
          </NavLink>
          <NavLink onClick={() => handleNavClick('contact')}>
            {intl.formatMessage({
              id: 'contact',
              defaultMessage: 'Contact',
            })}
          </NavLink>
          <MobileCVLink
            href='/cv.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </svg>
            {intl.formatMessage({
              id: 'nav.downloadCV',
              defaultMessage: 'Download CV',
            })}
          </MobileCVLink>
        </Nav>

        <RightSection>
          <LanguageSelectorContainer ref={dropdownRef}>
            <LanguageButton
              onClick={() => setIsLangOpen((open) => !open)}
              aria-label='Select language'
            >
              {renderFlag(currentLanguage.countryCode)}
              {preferredLang.toUpperCase()}
            </LanguageButton>
            {isLangOpen && (
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

          <CVButton href='/cv.pdf' target='_blank' rel='noopener noreferrer'>
            <svg
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </svg>
            {intl.formatMessage({
              id: 'nav.downloadCV',
              defaultMessage: 'Download CV',
            })}
          </CVButton>

          <MobileMenuButton
            aria-label='Menu'
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? (
              <svg
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </MobileMenuButton>
        </RightSection>
      </Container>
    </StyledHeader>
  )
}

export default Header
