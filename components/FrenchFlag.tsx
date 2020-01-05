import React from 'react'

type Props = {
  className?: string
}

const FrenchFlag: React.FC<Props> = ({ className }) => (
  <svg width='100%' viewBox='0 0 9 6' className={className}>
    <rect width='9' height='6' fill='#ED2939' />
    <rect width='6' height='6' fill='#fff' />
    <rect width='3' height='6' fill='#002395' />
  </svg>
)

export default FrenchFlag
