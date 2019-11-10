import React from 'react'
import styled from 'styled-components'
// import { NextPageContext } from 'next'

const Title = styled.h1`
  font-size: 50px;
`

export default class extends React.PureComponent {
  // static async getInitialProps(ctx: NextPageContext) {
  //   console.log('Contact req', ctx.req)
  //   return { foo: 'contact' }
  // }
  render() {
    return <Title>☎️ contact</Title>
  }
}
