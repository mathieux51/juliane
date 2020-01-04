import React from 'react'
import styled from 'styled-components'
import { NextPageContext } from 'next'
import { languageFromContext } from '../helpers/helpers'
import P from '../components/P'

const Container = styled.div``

const Title = styled.h1`
  margin-top: 2rem;
  font-size: 1.5rem;
`

export default class extends React.PureComponent {
  static async getInitialProps(ctx: NextPageContext) {
    return { language: languageFromContext(ctx) }
  }
  render() {
    return (
      <Container>
        <Title>About</Title>
        <P>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          corrupti repellat iure animi est fugit nam iusto a delectus fuga
          dignissimos rem incidunt, aliquid consequuntur libero voluptate quo
          pariatur soluta.
        </P>
      </Container>
    )
  }
}
