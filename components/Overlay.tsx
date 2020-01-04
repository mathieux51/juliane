import React from 'react'
import styled from 'styled-components'
import { OverlayContext } from '../context/Overlay'

const StyledOverlay = styled.div`
  position: fixed;
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`

type Props = {
  className?: string
  overlayChildren: JSX.Element
}

const Overlay: React.FC<Props> = ({ className, overlayChildren }) => {
  const { isOpen } = React.useContext(OverlayContext)
  return (
    <StyledOverlay className={className} isOpen={isOpen}>
      {overlayChildren}
    </StyledOverlay>
  )
}

export default Overlay
