import React from 'react'
import styled from 'styled-components'
// import dynamic from 'next/dynamic'

// const Header = dynamic(() => import("../components/Header"))

const H1 = styled.h1.attrs({ className: '' })`
  font-size: 3rem;
  margin: auto;
`

export default class Error extends React.PureComponent {
  render() {
    return (
      <>
        {/* <Header /> */}
        <H1>🤖: "Error! cannot compute" </H1>
      </>
    )
  }
}
