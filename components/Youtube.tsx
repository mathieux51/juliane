import React from 'react'
// @ts-ignore
import { LiteYouTubeEmbed } from 'react-lite-youtube-embed'

type Props = {
  className?: string
}

const Youtube: React.FC<Props> = () => {
  const videoID = 'lfCFR4fRMNU'

  return <LiteYouTubeEmbed id={videoID} />
}

export default Youtube
