import 'react-lite-youtube-embed'
import React from 'react'

declare module 'react-lite-youtube-embed' {
  type Props = {
    id: string
  }
  export type LiteYouTubeEmbed = React.FC<Props>
}
