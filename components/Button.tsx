import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button``

type Props = {
  className?: string
  onClick: (evt: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FC<Props> = ({ className, children, onClick }) => (
  <StyledButton className={className} onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button
