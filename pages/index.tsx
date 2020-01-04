import React from 'react'
import styled from 'styled-components'
import { NextPageContext } from 'next'
import { languageFromContext } from '../helpers/helpers'

const Container = styled.div`
  margin: 1rem;
`

const P = styled.p`
  color: #666;
  text-align: left;
  line-height: 1.6em;
  text-transform: none;
  letter-spacing: 0.02em;
  font-weight: 400;
  font-style: normal;
  font-size: inherit;
  margin: 0 0 1em;
`

const Box = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.24), 0 5px 5px rgba(0, 0, 0, 0.12);
  }
`

export default class extends React.PureComponent {
  static async getInitialProps(ctx: NextPageContext) {
    return { language: languageFromContext(ctx) }
  }
  render() {
    return (
      <Container>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          provident error non, distinctio inventore dolores sed praesentium est
          assumenda nihil. At delectus laborum eligendi ipsam eius iste ducimus
          fuga doloremque.
        </P>
        <Box />
      </Container>
    )
  }
}
