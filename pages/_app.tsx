import React from 'react'
import { ThemeProvider } from 'styled-components'
import App, { AppProps, AppContext } from 'next/app'
import dynamic from 'next/dynamic'
// import 'lazysizes'
// import { hotjar } from 'react-hotjar'
// import ReactGA from 'react-ga'
import IntlProvider from '../components/IntlProvider'
import theme from '../style/theme'
import Layout from '../components/Layout' // Cannot be dynamically loaded
import { getServerState } from '../helpers/helpers'
import { defaultLanguage } from '../constants/constants'
import { isServer } from '../helpers/helpers'

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
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={messages}>
        <OverlayProvider>
          <HamburgerProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </HamburgerProvider>
        </OverlayProvider>
      </IntlProvider>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp
