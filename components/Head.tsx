import React from 'react'
import Head from 'next/head'
import { useIntl } from 'react-intl'

const _Head = () => {
  const intl = useIntl()
  return (
    <Head>
      <title>Juliane Hendershot Videographer</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />

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
      {/* Fix "Eliminate render-blocking resources" */}
      <meta
        name='description'
        content={intl.formatMessage({ id: 'metaDescription' })}
      />
    </Head>
  )
}

export default _Head
