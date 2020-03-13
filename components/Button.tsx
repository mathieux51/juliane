import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button``

type Props = {
  className?: string
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void
  onBlur?: (evt: React.FocusEvent<HTMLButtonElement>) => void
  // onBlur?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type?: 'button' | 'submit' | 'reset' | undefined
  ref?:
    | ((instance: HTMLButtonElement | null) => void)
    | React.RefObject<HTMLButtonElement>
    | null
    | undefined
}

const Button: React.FC<Props> = React.forwardRef(
  ({ className, children, onClick, onBlur, type }, ref) => (
    <StyledButton
      className={className}
      onClick={onClick}
      onBlur={onBlur}
      type={type}
      ref={ref}
    >
      {children}
    </StyledButton>
  )
)

export default Button
