import React from 'react'
import { NextPageContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

function Index() {
  const router = useRouter()
  React.useEffect(() => {
    router.replace('/en')
  })

  return (
    <>
      <Head>
        <title>301 Moved</title>
        <meta httpEquiv='content-type' content='text/html;charset=utf-8' />
        {/* <meta name='robots' content='noindex, nofollow' /> */}
      </Head>
      <h1>301 Moved</h1>
      The document has moved
      <a href='/en'>here</a>
    </>
  )
}

Index.getInitialProps = async (ctx: NextPageContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  // const props = await Index.getInitialProps(ctx)

  if (ctx.res) {
    ctx.res.writeHead(301, { Location: '/en' })
    ctx.res.end()
  }

  // return { ...props }
  return
}

export default Index
