declare namespace JSX {
  interface IntrinsicElements {
    'lite-youtube': LiteYoutubeAttributes
    'lite-vimeo': any
  }
}

interface LiteYoutubeAttributes extends HTMLElement {
  videoid: string
  children: React.Node
}
