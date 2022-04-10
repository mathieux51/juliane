import React from 'react'
import 'lite-vimeo-embed'

type Props = {
  className?: string
  id: string
}

const Vimeo: React.FC<Props> = ({ className, id }) => {
  const style = {
    backgroundImage:
      "url('https://i.vimeocdn.com/video/810965406.webp?mw=1600&mh=900&q=70')",
  }

  return (
    <lite-vimeo videoid={id} style={style} className={className}>
      <div className='ltv-playbtn'></div>
    </lite-vimeo>
  )
}

export default Vimeo
