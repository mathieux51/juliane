import React from 'react'
import styled from 'styled-components'
import { isServer } from '../helpers/helpers'

const width = '640px'
const height = '360px'

const Placeholder = styled.div.attrs({ className: 'flex jc-c ai-c' })`
  width: ${width};
  height: ${height};
`

const Iframe = styled.iframe`
  width: ${width};
  height: ${height};
  & + ${Placeholder} {
    display: none;
  }
`
type Props = {
  className?: string
}

const Vimeo: React.FC<Props> = ({ className }) => (
  <>
    {!isServer && (
      <>
        <Iframe
          className={`${className} lazyload`}
          data-src='https://player.vimeo.com/video/37548766'
          frameBorder='0'
          allow='autoplay; fullscreen'
          allowFullScreen
        ></Iframe>
      </>
    )}
    <Placeholder>Loading...</Placeholder>
  </>
)

export default Vimeo
