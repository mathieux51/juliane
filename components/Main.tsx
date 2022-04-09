import React from 'react'
// import styled from 'styled-components'
// import { useIntl } from 'react-intl'
import dynamic from 'next/dynamic'
const Headband = dynamic(() => import('./Headband'))
const Videos = dynamic(() => import('./Videos'))

// const Container = styled.div.attrs({ className: 'flex fxd-c' })`
//   width: 100%;
//   min-height: calc(100vh - 146px);
// `

const Main: React.FC = () => (
  <>
    <Headband />
    <Videos />
  </>
)

export default Main
