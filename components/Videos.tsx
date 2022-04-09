import React from 'react'
import styled from 'styled-components'
import { media } from '../helpers/helpers'

const Container = styled.section`
  max-width: 1000px;
  margin-top: 236px;
  display: flex;
  flex-direction: column;
`

const SubContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

const Video = styled.div`
  width: 370px;
  height: 208px;
  background: ${({ theme }) => theme.dgray};
  margin: 11px;
  ${media.small`
    width: 478px;
    height: 269px;

 `}
`

type Props = {
  className?: string
}

const Headband: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <SubContainer>
        <Video />
        <Video />
      </SubContainer>
      <SubContainer>
        <Video />
        <Video />
      </SubContainer>
      <SubContainer>
        <Video />
        <Video />
      </SubContainer>
      <SubContainer>
        <Video />
        <Video />
      </SubContainer>
    </Container>
  )
}

export default Headband
