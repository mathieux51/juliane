import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button``

type Props = {
  className?: string
  onClick: (evt: React.MouseEvent<HTMLElement>) => void
  onBlur?: (evt: React.FocusEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ className, children, onClick, onBlur }) => (
  <StyledButton className={className} onClick={onClick} onBlur={onBlur}>
    {children}
  </StyledButton>
)

export default Button
