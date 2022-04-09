import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Header = styled.header.attrs({ className: 'flex jc-sb ai-c sticky' })`
  background: ${({ theme }) => theme.grey};
  height: 130px;
  width: 100%;
  z-index: 1;
`

const Container = styled.div.attrs({ className: 'flex jc-sb ai-c' })`
  max-width: 1000px;
  margin: auto;
  width: 100%;
  padding: 0 24px;
`

const Anchor = styled.a.attrs({ className: 'flex' })``

const TitleContainer = styled.div.attrs({ className: 'flex fxd-c relative' })``

const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  letter-spacing: 0.07em;
  color: #225b30;
  text-transform: uppercase;
`

const LinkedIn = styled(Title)`
  text-transform: capitalize;
`

const SubContainer = styled.div.attrs({ className: 'flex ai-c' })``

const _Header = () => {
  return (
    <Header>
      <Container>
        <Link href='#'>
          <Anchor>
            <TitleContainer>
              <Title>Juliane Hendershot</Title>
            </TitleContainer>
          </Anchor>
        </Link>
        <SubContainer>
          <LinkedIn>LinkedIn</LinkedIn>
        </SubContainer>
      </Container>
    </Header>
  )
}

export default _Header
