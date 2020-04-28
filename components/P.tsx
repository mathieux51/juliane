import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
  color: #666;
  text-align: left;
  line-height: 1.6em;
  text-transform: none;
  letter-spacing: 0.02em;
  font-weight: 400;
  font-style: normal;
  font-size: inherit;
  margin: 0 0 1em;
`

type Props = {
  className?: string
}

const P: React.FC<Props> = ({ className, children }) => (
  <StyledP className={className}>{children}</StyledP>
)

export default P
