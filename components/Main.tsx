import React from 'react'
import dynamic from 'next/dynamic'
const Headband = dynamic(() => import('./Headband'))
const Videos = dynamic(() => import('./Videos'))

const Main: React.FC = () => (
  <>
    <Headband />
    <Videos />
  </>
)

export default Main
