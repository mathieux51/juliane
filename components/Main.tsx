import React from 'react'
import dynamic from 'next/dynamic'
const Headband = dynamic(() => import('./Headband'))
const Videos = dynamic(() => import('./Videos'))
const Contact = dynamic(() => import('./Contact'))
const Footer = dynamic(() => import('./Footer'))

const Main: React.FC = () => (
  <>
    <Headband />
    <Videos />
    <Contact />
    <Footer />
  </>
)

export default Main
