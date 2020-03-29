import React from 'react'

export const OverlayContext: React.Context<any> = React.createContext(null)
OverlayContext.displayName = 'OverlayContext'
const { Provider, Consumer } = OverlayContext

export { Consumer as OverlayConsuer }

type Props = {
  children: React.ReactNode
}

function OverlayProvider(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [overlayChildren, render] = React.useState(null)

  const state = {
    isOpen,
    setIsOpen,
    overlayChildren,
    render,
  }

  return <Provider value={state}>{props.children}</Provider>
}

export default OverlayProvider
