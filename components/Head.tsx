import React from 'react'
import Head from 'next/head'

const _Head = () => {
  const linkRef = React.useRef<HTMLLinkElement>(null)
  const handleOnLoad = () => {
    if (linkRef && linkRef.current) {
      linkRef.current.onload = null
      linkRef.current.rel = 'stylesheet'
    }
  }

  return (
    <Head>
      <title>julianehendershot.com</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {/* <link rel='preconnect' href='https://www.google-analytics.com' />
    <link rel='preconnect' href='https://in.hotjar.com' />
    <link rel='preconnect' href='https://vars.hotjar.com' />
    <link rel='preconnect' href='https://vc.hotjar.io' />
    <meta name='Description' content='my description' />
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/static/apple-touch-icon.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/static/favicon-32x32.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/static/favicon-16x16.png'
    />
    <link rel='manifest' href='/static/site.webmanifest' />
    <link
      rel='mask-icon'
      href='/static/safari-pinned-tab.svg'
      color='#5bbad5'
    /> */}
      {/* <meta name='msapplication-TileColor' content='#da532c' /> */}
      {/* <meta name='theme-color' content='#ffffff' /> */}
      <link
        ref={linkRef}
        rel='preload'
        href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
        as='style'
        onLoad={handleOnLoad}
      />
      <noscript>
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
          rel='stylesheet'
          type='text/css'
        />
      </noscript>
    </Head>
  )
}

export default _Head
