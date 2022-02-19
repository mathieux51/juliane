import React from 'react'
import styled from 'styled-components'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

type mapPropsToLiteYouTubeEmbedProps = {
  videoID: string
  className?: string
  adNetwork?: boolean
  playlist?: boolean
  poster?: string
  title?: string
  activatedClass?: string
  iframeClass?: string
  playerClass?: string
  wrapperClass?: string
}

const MapPropsToLiteYouTubeEmbed: React.FC<mapPropsToLiteYouTubeEmbedProps> = ({
  videoID,
  className,
  adNetwork,
  playlist,
  poster,
  title,
  activatedClass,
  playerClass,
  iframeClass,
}) => (
  <LiteYouTubeEmbed
    id={videoID}
    wrapperClass={(className ? className : '') + ' yt-lite'}
    adNetwork={adNetwork}
    playlist={playlist}
    poster={poster}
    title={title}
    activatedClass={activatedClass}
    iframeClass={iframeClass}
    playerClass={playerClass}
  />
)

const StyledLiteYouTubeEmbed = styled(MapPropsToLiteYouTubeEmbed)`
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  & iframe {
    width: 100%;
    height: 100%;
  }
`

type YoutubeProps = {
  className?: string
}

const Youtube: React.FC<YoutubeProps> = ({ className }) => {
  const videoID = 'ov_0CaTZgmk'
  const title = 'Test'

  return (
    <StyledLiteYouTubeEmbed
      videoID={videoID}
      className={className}
      title={title}
    />
  )
}

export default Youtube
