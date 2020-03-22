import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
// import 'lazysizes'
// import { hotjar } from 'react-hotjar'
// import ReactGA from 'react-ga'
import theme from '../style/theme'
import { getServerState } from '../helpers/helpers'
import { defaultLanguage, config } from '../constants/constants'
import { isServer } from '../helpers/helpers'

const Layout = dynamic(() => import('../components/Layout'))
const IntlProvider = dynamic(() => import('../components/IntlProvider'))
const HamburgerProvider = dynamic(() => import('../context/Hamburger'))
const OverlayProvider = dynamic(() => import('../context/Overlay'))

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

function MyApp(props: AppProps) {
  // componentDidMount() {
  // if (isProd) {
  // hotjar.initialize(process.env.HOT_JAR_SITE_ID || '', 'v1')
  // ReactGA.initialize(process.env.GA_TRACKING_ID || '')
  // ReactGA.pageview(window.location.pathname + window.location.search)
  // }
  // }
  const { Component, pageProps } = props
  const locale = getLocale(pageProps.language)
  const messages = getMessages(pageProps.messages)
  console.log('config', config)
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={messages}>
        <GoogleReCaptchaProvider
          reCaptchaKey={config.RECAPTCHA_CLIENT_SIDE}
          language={locale}
        >
          <OverlayProvider>
            <HamburgerProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </HamburgerProvider>
          </OverlayProvider>
        </GoogleReCaptchaProvider>
      </IntlProvider>
    </ThemeProvider>
  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext)
//   return { ...appProps }
// }

export default MyApp
