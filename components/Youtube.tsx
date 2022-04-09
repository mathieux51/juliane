import React from 'react'
// import styled from 'styled-components'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

type YoutubeProps = {
  className?: string
}

const Youtube: React.FC<YoutubeProps> = ({ className }) => {
  const videoID = 'ov_0CaTZgmk'
  const title = 'Test'

  return (
    <LiteYouTubeEmbed
      id={videoID}
      wrapperClass={(className ? className : '') + ' yt-lite'}
      title={title}
    />
  )
}

export default Youtube
