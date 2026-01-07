import React from 'react'
import dynamic from 'next/dynamic'

const HeaderBanner = dynamic(() => import('./HeaderBanner'))
const About = dynamic(() => import('./About'))
const Videos = dynamic(() => import('./Videos'))
const Contact = dynamic(() => import('./Contact'))
const Footer = dynamic(() => import('./Footer'))

const Main: React.FC = () => (
  <>
    <HeaderBanner />
    <Videos />
    <About />
    <Contact />
    <Footer />
  </>
)

export default Main
