import React, { useState, useEffect } from 'react'
import {
  createIntl,
  createIntlCache,
  RawIntlProvider,
  IntlConfig,
} from 'react-intl'
import getMessages from '../intl/getMessages'

type localeType = IntlConfig['locale']
type messagesType = IntlConfig['messages']

interface ContextProps {
  setLocale: (locale: localeType) => void
  locale: localeType
  messages: messagesType
  children: React.ReactNode
}

const LocaleContext = React.createContext<ContextProps>({
  locale: 'en',
  messages: {},
  setLocale: () => {},
  children: null,
})

export const useLocale = () => React.useContext<ContextProps>(LocaleContext)

const cache = createIntlCache()

const IntlProvider: React.FC<
  Pick<ContextProps, 'locale' | 'messages' | 'children'>
> = ({ children, locale, messages }) => {
  const [intl, setIntl] = useState(createIntl({ locale, messages }, cache))

  const setLocale = async (nextLocale: localeType) => {
    // only triggered by used in this case go and fetch new locale data
    const nextMessages = await getMessages(nextLocale)
    setIntl(createIntl({ locale: nextLocale, messages: nextMessages }, cache))
  }

  useEffect(() => {
    setIntl(createIntl({ locale, messages }, cache))
  }, [locale, messages])

  const value: ContextProps = {
    locale,
    messages,
    setLocale,
    children,
  }

  return (
    <LocaleContext.Provider value={value}>
      <RawIntlProvider value={intl}>{children}</RawIntlProvider>
    </LocaleContext.Provider>
  )
}
export default IntlProvider
