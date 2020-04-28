import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { NextPageContext } from 'next'

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

Index.getInitialProps = async ({ res }: NextPageContext) => {
  if (res) {
    // in case of export res.writeHead is not a function
    // redirection is done in now.json
    if (res.writeHead) {
      res.writeHead(301, { Location: '/en' })
      res.end()
    }
  }

  return {}
}

export default Index
