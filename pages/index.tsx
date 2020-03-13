import React from 'react'
import styled from 'styled-components'
import { NextPageContext } from 'next'
import 'lite-youtube-embed/src/lite-yt-embed.css'
import 'lite-youtube-embed/src/lite-yt-embed.js'
import { languageFromContext } from '../helpers/helpers'
import { isServer } from '../helpers/helpers'

const Container = styled.div`
  width: 100%;
`

// const Box = styled.div`
//   width: 100%;
//   height: 300px;
//   border-radius: 8px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
//   &:hover {
//     box-shadow: 0 7px 10px rgba(0, 0, 0, 0.24), 0 5px 5px rgba(0, 0, 0, 0.12);
//   }
// `

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
    const liteYoutubeCSS = {
      backgroundImage: "url('https://i.ytimg.com/vi/ogfYd705cRs/hqdefault.jpg'",
      width: '100%',
      height: '100%'
    }
    return (
      <Container>
        <GreyBox>
          {!isServer && (
            <lite-youtube
              videoid='b05Scfhi0dU'
              style={liteYoutubeCSS}
              className={liteYoutubeCSS}
            >
              <div className='lty-playbtn'></div>
            </lite-youtube>
          )}
        </GreyBox>
        <OrangeBox>After effect (on demand)</OrangeBox>
        <RedBox>Post card USA</RedBox>
        <TurquoiseBox />
      </Container>
    )
  }
}
