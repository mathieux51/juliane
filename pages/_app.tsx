import React from 'react'
import { ThemeProvider } from 'styled-components'
import App from 'next/app'
// import { hotjar } from 'react-hotjar'
// import ReactGA from 'react-ga'
import { LanguageProvider } from '../context/Language'
import theme from '../style/theme'
import Layout from '../components/Layout' // Cannot be dynamically loaded
import { isProd } from '../helpers/helpers'

class _App extends App {
  componentDidMount() {
    if (isProd) {
      // hotjar.initialize(process.env.HOT_JAR_SITE_ID || '', 'v1')
      // ReactGA.initialize(process.env.GA_TRACKING_ID || '')
      // ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <LanguageProvider language={pageProps.language}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LanguageProvider>
      </ThemeProvider>
    )
  }
}
export default _App
