function addPrefetch(kind, url, as) {
  const linkElem = document.createElement('link')
  linkElem.rel = kind
  linkElem.href = url
  if (as) {
    linkElem.as = as
  }
  linkElem.crossorigin = true
  document.head.appendChild(linkElem)
}

function getThumbnailDimensions({ width, height }) {
  let roundedWidth = width
  let roundedHeight = height

  if (roundedWidth % 320 !== 0) {
    roundedWidth = Math.ceil(width / 100) * 100
    roundedHeight = Math.round((roundedWidth / width) * height)
  }

  return {
    width: roundedWidth,
    height: roundedHeight,
  }
}

class LiteVimeo extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.videoId = encodeURIComponent(this.getAttribute('videoid'))

    let { width, height } = getThumbnailDimensions(this.getBoundingClientRect())
    const devicePixelRatio = window.devicePixelRatio || 1
    width *= devicePixelRatio
    height *= devicePixelRatio

    const playBtn = document.createElement('button')
    playBtn.type = 'button'
    playBtn.classList.add('ltv-playbtn')
    this.appendChild(playBtn)

    this.addEventListener('pointerover', LiteVimeo._warmConnections, {
      once: true,
    })

    this.addEventListener('click', () => this._addIframe())
  }

  static _warmConnections() {
    if (LiteVimeo.preconnected) return

    addPrefetch('preconnect', 'https://player.vimeo.com')
    addPrefetch('preconnect', 'https://i.vimeocdn.com')
    addPrefetch('preconnect', 'https://f.vimeocdn.com')
    addPrefetch('preconnect', 'https://fresnel.vimeocdn.com')

    LiteVimeo.preconnected = true
  }

  _addIframe() {
    const iframeHTML = `
<iframe width="640" height="360" frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://player.vimeo.com/video/${this.videoId}?autoplay=1"
></iframe>`
    this.insertAdjacentHTML('beforeend', iframeHTML)
    this.classList.add('ltv-activated')
  }
}
customElements.define('lite-vimeo', LiteVimeo)
