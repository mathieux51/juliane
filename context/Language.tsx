import React from 'react'

export const LanguageContext: React.Context<any> = React.createContext(null)
LanguageContext.displayName = 'LanguageContext'
const { Provider, Consumer } = LanguageContext

export { Consumer as RecommendationOverlayConsumer }

type Props = {
  language: string
  children: React.ReactNode
}

export function LanguageProvider(props: Props) {
  const [language, setLanguage] = React.useState(props.language)

  React.useEffect(() => {
    setLanguage(props.language)
  }, [props.language])

  const state = {
    language,
    setLanguage
  }

  return <Provider value={state}>{props.children}</Provider>
}
