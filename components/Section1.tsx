import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

const Youtube = dynamic(() => import('./Youtube'), {
  ssr: false,
})

const Container = styled.section`
  display: flex;
  width: calc(100% - 4rem);
  margin: 0 -2rem;
  height: 540px;
  align-items: center;
  padding: 1rem;
`

const YoutubeContainer = styled.div`
  width: 70vw;
  height: calc((3 / 4) * 100vw);
  max-width: calc(720px - 2rem);
  max-height: calc(540px - 2rem);
`

const StyledYoutube = styled(Youtube)`
  border-radius: 4px;
`

const P1 = styled.p.attrs({ className: 'flex ai-c' })`
  width: 30vw;
  margin: 2rem;
`

type Props = {
  className?: string
}

const Section1: React.FC<Props> = ({ className }) => (
  <Container className={className}>
    <YoutubeContainer>
      <StyledYoutube />
    </YoutubeContainer>
    <P1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit
      arcu non tristique tempus. Praesent porttitor est at fermentum feugiat.
      Quisque enim nunc, congue et ipsum ut, tempor interdum sapien. Sed
      lobortis ipsum vitae arcu imperdiet, eget bibendum mauris condimentum. Sed
      lacinia imperdiet risus congue imperdiet
    </P1>
  </Container>
)

export default Section1
