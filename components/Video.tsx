import React from 'react'

type Props = {
  className?: string
  src: string
  backgroundImage: string
}

const Video: React.FC<Props> = ({ className, src, backgroundImage }) => {
  return (
    <video controls className={className} poster={backgroundImage}>
      <source src={src} type='video/mp4' />
    </video>
  )
}

export default Video
