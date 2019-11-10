import React from 'react'
import styled from 'styled-components'
// import { NextPageContext } from 'next'

const Title = styled.h1`
  font-size: 50px;
`

export default class extends React.PureComponent {
  // static async getInitialProps(ctx: NextPageContext) {
  //   if (ctx.req && ctx.req.url) {
  //     console.log('Home url', ctx.req.url)
  //   }
  //   return { foo: 'about' }
  // }
  render() {
    return <Title>🎬 About</Title>
  }
}
