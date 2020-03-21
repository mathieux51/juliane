declare module 'react-lite-youtube-embed' {
  interface LiteYouTubeEmbedProps {
    id: string
    adNetwork?: boolean
    playlist?: boolean
    poster?: string
    title?: string
    activatedClass?: string
    iframeClass?: string
    playerClass?: string
    wrapperClass?: string
  }
  const LiteYouTubeEmbed: React.FC<LiteYouTubeEmbedProps>
}
