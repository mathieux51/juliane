import React from 'react'
// import styled from 'styled-components'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

type YoutubeProps = {
  className?: string
  id: string
  title: string
}

const Youtube: React.FC<YoutubeProps> = ({ className, id, title }) => (
  <LiteYouTubeEmbed
    id={id}
    wrapperClass={(className ? className : '') + ' yt-lite'}
    title={title}
  />
)

export default Youtube
