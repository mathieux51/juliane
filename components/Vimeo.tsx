import React from 'react'
import 'lite-vimeo-embed'

type Props = {
  className?: string
}

const Vimeo: React.FC<Props> = () => {
  const style = {
    width: '100%',
    backgroundImage:
      "url('https://i.vimeocdn.com/video/810965406.webp?mw=1600&mh=900&q=70')",
  }

  return (
    <lite-vimeo videoid='37548766' style={style}>
      <div className='ltv-playbtn'></div>
    </lite-vimeo>
  )
}

export default Vimeo
