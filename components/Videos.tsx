import dynamic from 'next/dynamic';
import React from 'react'
import styled from 'styled-components'
import { media } from '../helpers/helpers'
const Youtube = dynamic(() => import('./Youtube'));
const Vimeo = dynamic(() => import('./Vimeo'), { ssr: false });
const Video = dynamic(() => import('./Video'));

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
        <StyledVimeo id="630805272" />
        <StyledYoutube id="OLKjzVnu9Tk" title="Butch Vig" />
      </SubContainer>
      <SubContainer>
        <StyledYoutube id="q6crsrAmDLQ" title="Retro promo" />
        <StyledVimeo id="598756966" />
      </SubContainer>
      <SubContainer>
        <StyledVideo src="humanoo.mp4" />
        <StyledVimeo id="561815901" />
      </SubContainer>
      <SubContainer>
        <StyledVimeo id="598755066" />
        <StyledYoutube id="wE72A-bV_HQ" title="Christmas Ham" />
      </SubContainer>
    </Container>
  )
}

export default Videos
