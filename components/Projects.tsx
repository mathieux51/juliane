import React from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
  className: ''
})``

const ImageGrid = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px;
`

const Img = styled.img`
  background: #444;
  height: 150px;
  flex: 1 0 150px;
  margin: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`

type Props = {}


const Projects: React.FunctionComponent<Props> = () => (
  <Container>
    <ImageGrid>
      <Img src='https://source.unsplash.com/user/newlightcinemas/150x150' alt='' />
      <Img src='https://source.unsplash.com/user/newlightcinemas/150x150' alt='' />
      <Img src='https://source.unsplash.com/user/newlightcinemas/150x150' alt='' />
      <Img src='https://source.unsplash.com/user/newlightcinemas/150x150' alt='' />
      <Img src='https://source.unsplash.com/user/newlightcinemas/150x150' alt='' />
      <Img src='https://source.unsplash.com/user/newlightcinemas/150x150' alt='' />
      <Img src='https://source.unsplash.com/user/newlightcinemas/150x150' alt='' />
      <Img src='https://source.unsplash.com/user/newlightcinemas/150x150' alt='' />
      <Img src='https://source.unsplash.com/user/newlightcinemas/150x150' alt='' />
      <Img src='https://source.unsplash.com/user/newlightcinemas/150x150' alt='' />
    </ImageGrid>
  </Container>
)

export default Projects
