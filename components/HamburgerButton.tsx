import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Hamburger from './Hamburger'

const StyledButton = styled(Button)`
  width: 2rem;
  height: 2rem;
  padding: 5px;
  border-radius: 4px;
  &:hover,
  &:focus {
    background: #ededf0;
  }
`

const StyledHamburger = styled(Hamburger)`
  & > path {
    fill: #2bcdc3;
  }
`

type Props = {
  className?: string
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void
}

type Ref = HTMLButtonElement

const HamburgerButton = React.forwardRef<Ref, Props>(
  ({ className, onClick }, ref) => (
    <StyledButton
      className={className}
      onClick={onClick}
      aria-label='menu'
      disabled
      ref={ref}
    >
      <StyledHamburger />
    </StyledButton>
  )
)

export default HamburgerButton
