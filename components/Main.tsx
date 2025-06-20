import React from 'react'
import dynamic from 'next/dynamic'
const Headband = dynamic(() => import('./Headband'))
const Videos = dynamic(() => import('./Videos'))
const Contact = dynamic(() => import('./Contact'))

const Main: React.FC = () => (
  <>
    <Headband />
    <Videos />
    <Contact />
  </>
)

export default Main
