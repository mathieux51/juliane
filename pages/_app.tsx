import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import theme from '../style/theme'
import { getServerState } from '../helpers/helpers'
import { defaultLanguage } from '../constants/constants'
import { isServer } from '../helpers/helpers'
import Layout from '../components/Layout'
import IntlProvider from '../components/IntlProvider'

function getLocale(language: string | undefined): string {
  // server side
  if (isServer) {
    if (language) {
      return language
    }
    return defaultLanguage
  }
  // browser side
  const state = getServerState()
  if (state && state.language) {
    return state.language
  }
  return defaultLanguage
}

function getMessages(messages: string | undefined) {
  // server side
  if (messages) {
    return messages
  }
  // browser side
  const state = getServerState()
  if (state && state.messages) {
    return state.messages
  }
}

function App(props: AppProps) {
  const { Component, pageProps } = props
  const locale = getLocale(pageProps.language)
  const messages = getMessages(pageProps.messages)
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={messages}>
        <GoogleReCaptchaProvider
          reCaptchaKey='6LfSYWcrAAAAAFEISzQjheMNy9OCoSj_kw6e2dcN'
          language={locale}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GoogleReCaptchaProvider>
      </IntlProvider>
    </ThemeProvider>
  )
}

export default App
