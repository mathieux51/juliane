import dynamic from 'next/dynamic'
import React from 'react'
import styled from 'styled-components'
import { media } from '../helpers/helpers'
const Youtube = dynamic(() => import('./Youtube'))
const Vimeo = dynamic(() => import('./Vimeo'))
const Video = dynamic(() => import('./Video'))

const Container = styled.section`
  max-width: 1000px;
  display: flex;
  margin-top: 276px;
  flex-direction: column;
  ${media.medium`
    margin-top: 236px;
 `}
`

const SubContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

const StyledYoutube = styled(Youtube)`
  width: 370px;
  height: 208px;
  background: ${({ theme }) => theme.dgray};
  margin: 11px;
  ${media.small`
    width: 478px;
    height: 269px;
 `}
`

const StyledVimeo = styled(Vimeo)`
  width: 370px;
  height: 208px;
  background: ${({ theme }) => theme.dgray};
  background-size: cover;
  margin: 11px;
  ${media.small`
    width: 478px;
    height: 269px;
 `}
`

const StyledVideo = styled(Video)`
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

const Videos: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <SubContainer>
        <StyledVimeo
          id='598756966'
          backgroundImage='expert-talks-diagana.png'
        />
        <StyledYoutube id='OLKjzVnu9Tk' title='Butch Vig' />
      </SubContainer>
      <SubContainer>
        <StyledYoutube id='q6crsrAmDLQ' title='Retro promo' />
        <StyledVimeo id='561815901' backgroundImage='user-story.png' />
      </SubContainer>
      <SubContainer>
        <StyledVideo src='humanoo.mp4' backgroundImage='humanoo.png' />
        <StyledVimeo id='630805272' backgroundImage='boost-up.png' />
      </SubContainer>
      <SubContainer>
        <StyledVimeo id='598755066' backgroundImage='expert-talks-carre.png' />
        <StyledYoutube id='wE72A-bV_HQ' title='Christmas Ham' />
      </SubContainer>
    </Container>
  )
}

export default Videos
