import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'react-intl'

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

function Main() {
  const intl = useIntl()
  return (
    <Container>
      <GreyBox>{intl.formatMessage({ id: 'title' })}</GreyBox>
      <OrangeBox>After effect (on demand)</OrangeBox>
      <RedBox>Post card USA</RedBox>
      <TurquoiseBox />
    </Container>
  )
}

export default Main
