import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import App from 'next/app'
// import { hotjar } from 'react-hotjar'
// import ReactGA from 'react-ga'
// import { InformationProvider } from '../context/InformationContext'
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
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}
export default _App
