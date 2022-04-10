import React from 'react'

type Props = {
  className?: string
  src: string
}

const Video: React.FC<Props> = ({ className, src }) => {
  return (
    <video controls className={className}>
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default Video

