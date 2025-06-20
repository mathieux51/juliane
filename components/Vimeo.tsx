import React from 'react'

type Props = {
  className?: string
  id: string
  backgroundImage: string
}

const Vimeo: React.FC<Props> = ({ className, id, backgroundImage }) => {
  React.useEffect(() => {
    import('./lite-vimeo-embed')
  })
  return (
    <lite-vimeo
      videoid={id}
      className={className}
      style={`background-image: url('/${backgroundImage}');`}
    >
      <div className='ltv-playbtn'></div>
    </lite-vimeo>
  )
}

export default Vimeo
