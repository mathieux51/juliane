import React from 'react'
import dynamic from 'next/dynamic'

const LiteYouTubeEmbed = dynamic(
  () => import('react-lite-youtube-embed').then((m) => m.default),
  { ssr: false },
)

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
