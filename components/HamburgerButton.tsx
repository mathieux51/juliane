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
  onClick: (evt: React.MouseEvent<HTMLElement>) => void
}

const HamburgerButton: React.FC<Props> = ({ className, onClick }) => (
  <StyledButton className={className} onClick={onClick} aria-label='menu'>
    <StyledHamburger />
  </StyledButton>
)

export default HamburgerButton
