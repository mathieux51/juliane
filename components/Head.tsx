import React from 'react'
import Head from 'next/head'

type DescriptionProps = {
  language: string
}

const Description: React.FC<DescriptionProps> = ({ language }) => {
  if (language === 'de') {
    return (
      <meta
        name='description'
        content='Juliane Hendershot ist eine in Berlin lebende Videografin'
      />
    )
  }
  if (language === 'fr') {
    return (
      <meta
        name='description'
        content='Juliane Hendershot est une vidéaste basée à Berlin'
      />
    )
  }

  return (
    <meta
      name='description'
      content='Juliane Hendershot is a Berlin-based Videographer'
    />
  )
}

type Props = {
  language: string
}

const _Head: React.FC<Props> = ({ language }) => (
  <Head>
    <title>Juliane Hendershot Videographer</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link rel='preconnect' href='https://www.gstatic.com' />
    <link rel='preconnect' href='https://www.google.com' />
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
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
    />
    <Description language={language} />
  </Head>
)

export default _Head
