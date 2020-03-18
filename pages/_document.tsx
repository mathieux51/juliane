import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import getMessages from '../intl/getMessages'

const getLocaleFromPathname = (pathname: string): string => {
  if (pathname.match(/_error/)) {
    return 'en'
  }
  return pathname.split('/')[1]
}
type Props = {
  language: string
  messages: string
}

class MyDocument extends Document<Props> {
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
      const serializedMessages = JSON.stringify(messages)
      return {
        language,
        messages: serializedMessages,
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
    const { language, messages } = this.props
    return (
      <Html lang={language}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__SERVER_STATE__ = {
                messages: ${messages},
                language: '${language}'
              }`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
