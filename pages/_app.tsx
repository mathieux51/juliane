import React from 'react'
import { ThemeProvider } from 'styled-components'
import App from 'next/app'
import { withRouter } from 'next/router'
// import { hotjar } from 'react-hotjar'
// import ReactGA from 'react-ga'
import { LanguageProvider } from '../context/Language'
import theme from '../style/theme'
import Layout from '../components/Layout' // Cannot be dynamically loaded

const isProd = process.env.NODE_ENV !== 'development'

class _App extends App {
  componentDidMount() {
    if (isProd) {
      // hotjar.initialize(process.env.HOT_JAR_SITE_ID || '', 'v1')
      // ReactGA.initialize(process.env.GA_TRACKING_ID || '')
      // ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }
  render() {
    const { Component, pageProps, router } = this.props
    const language = Array.isArray(router.query.language)
      ? router.query.language[0]
      : router.query.language
    return (
      <ThemeProvider theme={theme}>
        <LanguageProvider language={language}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LanguageProvider>
      </ThemeProvider>
    )
  }
}
export default withRouter(_App)
