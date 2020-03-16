import React from 'react'
import { ThemeProvider } from 'styled-components'
import App, { AppContext } from 'next/app'
// import { hotjar } from 'react-hotjar'
// import ReactGA from 'react-ga'
import IntlProvider from '../components/IntlProvider'
import { LanguageProvider } from '../context/Language'
import { HamburgerProvider } from '../context/Hamburger'
import { OverlayProvider } from '../context/Overlay'
import theme from '../style/theme'
import Layout from '../components/Layout' // Cannot be dynamically loaded
// import { isProd } from '../constants/constants'

type Props = {
  language: string
  locale: string
  messages: any
}

export default class extends App<Props> {
  static getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext)
    // ⚠️  find a way to add pageProps to component
    console.log(appProps)
    return { ...appProps }
  }

  // componentDidMount() {
  // if (isProd) {
  // hotjar.initialize(process.env.HOT_JAR_SITE_ID || '', 'v1')
  // ReactGA.initialize(process.env.GA_TRACKING_ID || '')
  // ReactGA.pageview(window.location.pathname + window.location.search)
  // }
  // }
  render() {
    console.log(this.props)
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <IntlProvider locale={pageProps.language} messages={pageProps.messages}>
          <LanguageProvider language={pageProps.language}>
            <OverlayProvider>
              <HamburgerProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </HamburgerProvider>
            </OverlayProvider>
          </LanguageProvider>
        </IntlProvider>
      </ThemeProvider>
    )
  }
}
