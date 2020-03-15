import React from 'react'
import styled from 'styled-components'
import { NextPageContext } from 'next'
import { languageFromContext } from '../helpers/helpers'

const Container = styled.div`
  width: 100%;
`

const ColorBox = styled.div`
  width: 100%;
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GreyBox = styled(ColorBox)`
  border: 1px solid ${props => props.theme.colors.grey};
`

const OrangeBox = styled(ColorBox)`
  border: 1px solid ${props => props.theme.colors.orange};
`

const RedBox = styled(ColorBox)`
  border: 1px solid ${props => props.theme.colors.red};
`

const TurquoiseBox = styled(ColorBox)`
  border: 1px solid ${props => props.theme.colors.turquoise};
`

export default class extends React.PureComponent {
  static async getInitialProps(ctx: NextPageContext) {
    return { language: languageFromContext(ctx) }
  }

  render() {
    return (
      <Container>
        <GreyBox></GreyBox>
        <OrangeBox>After effect (on demand)</OrangeBox>
        <RedBox>Post card USA</RedBox>
        <TurquoiseBox />
      </Container>
    )
  }
}
