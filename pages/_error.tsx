import { useRouter } from 'next/router'
import styled from 'styled-components'

const messages = {
  en: { title: 'Page Not Found' },
  de: { title: 'Seite nicht gefunden' },
  fr: { title: 'Page non trouvée' },
}

const H1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-top: 5rem;
`

export default function Custom404() {
  const { locale = 'en' } = useRouter()
  const { title } = messages[locale as keyof typeof messages] || messages.en

  return <H1>{title}</H1>
}
