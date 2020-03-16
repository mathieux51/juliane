import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// import { languageFromContext } from '../helpers/helpers'
import getMessages from '../intl/getMessages'

const getLocaleFromPathname = (pathname: string): string =>
  pathname.split('/')[1]

type Props = {
  language: string
}

export default class extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const language = getLocaleFromPathname(ctx.pathname)
    const messages = await getMessages(language)
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => {
            const enhanceProps = { ...props, pageProps: { language, messages } }
            return sheet.collectStyles(<App {...enhanceProps} />)
          }
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        language,
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    const { language } = this.props
    // const { language = defaultLanguage } = this.props.__NEXT_DATA__.query
    // const lang = Array.isArray(language) ? language[0] : language
    return (
      <Html lang={language}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
