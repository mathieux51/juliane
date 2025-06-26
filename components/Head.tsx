import React from 'react'
import NextHead from 'next/head'
import { useIntl } from 'react-intl'

const Head: React.FC = () => {
  const intl = useIntl()
  return (
    <NextHead>
      <title>{intl.formatMessage({ id: 'pageTitle' })}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {/* Fonts are loaded in _document.tsx for better performance */}
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
    </NextHead>
  )
}

export default Head
