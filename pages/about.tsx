import React from 'react'
import styled from 'styled-components'
import { NextPageContext } from 'next'
import { languageFromContext } from '../helpers/helpers'

const Title = styled.h1`
  font-size: 50px;
`

export default class extends React.PureComponent {
  static async getInitialProps(ctx: NextPageContext) {
    return { language: languageFromContext(ctx) }
  }
  render() {
    return <Title>🎬 About</Title>
  }
}
