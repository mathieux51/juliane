import React from 'react'
import dynamic from 'next/dynamic'
const HeaderBanner = dynamic(() => import('./HeaderBanner'))
const Videos = dynamic(() => import('./Videos'))
const Contact = dynamic(() => import('./Contact'))
const Footer = dynamic(() => import('./Footer'))

const Main: React.FC = () => (
  <>
    <HeaderBanner />
    <Videos />
    <Contact />
    <Footer />
  </>
)

export default Main
