import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

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

const LanguageSelect = styled.select`
  background: ${({ theme }) => theme.grey};
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;
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

const Header = () => {
  const [preferredLang, setPreferredLang] = React.useState<string | null>(null)
  const intl = useIntl()

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const lang = window.__SERVER_STATE__?.language ?? 'en'
      setPreferredLang(lang)
    }
  }, [])

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value
    window.location.href = `/${next}`
  }

  const handleContactScroll = () => {
    const el = document.getElementById('contact');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  const allLanguages = [
    { code: 'en', label: '🇬🇧 EN' },
    { code: 'fr', label: '🇫🇷 FR' },
    { code: 'de', label: '🇩🇪 DE' },
  ]

  // Move preferredLang to the top of the list
  const sortedLanguages = preferredLang
    ? [
        allLanguages.find((l) => l.code === preferredLang)!,
        ...allLanguages.filter((l) => l.code !== preferredLang),
      ]
    : allLanguages

  return (
    <StyledHeader>
      <Container>
        <RightMenu>
          {preferredLang && (
            <LanguageSelect
              aria-label='Select language'
              onChange={handleLanguageChange}
              value={preferredLang}
            >
              {sortedLanguages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </LanguageSelect>
          )}
          <ContactButton onClick={handleContactScroll}>
            {intl.formatMessage({ id: 'contact', defaultMessage: 'Contact' })}
          </ContactButton>
        </RightMenu>
      </Container>
    </StyledHeader>
  )
}

export default Header
