import React from 'react'
import styled from 'styled-components'
import { isServer } from '../helpers/helpers'

const Placeholder = styled.div.attrs({ className: 'flex jc-c ai-c' })`
  width: 560px;
  height: 315px;
`

const Iframe = styled.iframe`
  & + ${Placeholder} {
    display: none;
  }
`
type Props = {
  className?: string
}

const Youtube: React.FC<Props> = () => (
  <>
    {!isServer && (
      <Iframe
        className='lazyload'
        width='560'
        height='315'
        data-src='https://www.youtube-nocookie.com/embed/IMk_qD-dtqE'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></Iframe>
    )}
    <Placeholder>Loading...</Placeholder>
  </>
)

export default Youtube
