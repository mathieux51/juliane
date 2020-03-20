import React from 'react'
import styled from 'styled-components'
import { isServer } from '../helpers/helpers'

const width = '560px'
const height = '315px'

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

const Youtube: React.FC<Props> = ({ className }) => (
  <>
    {!isServer && (
      <Iframe
        className={`${className} lazyload`}
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
