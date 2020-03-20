import React from 'react'
import dynamic from 'next/dynamic'

const Main = dynamic(() => import('../../components/Main'))

function Index() {
  return <Main />
}

export default Index
