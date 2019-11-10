import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// import { getLocale } from '../helpers/helpers'

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // locale from URL or from headers
    // console.log('_Document getInitialProps', ctx)
    // let pathname = null
    // if (ctx.req) {
    //   if (ctx.req.url) {
    //     console.log('_Document ctx.req.url', ctx.req.url)
    //     // pathname = new URL(ctx.req.url).pathname
    //   }
    // }

    // const locale = getLocale(pathname, ctx.req)

    // console.log(locale)

    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        // locale,
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
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
