import React from 'react'

export const OverlayContext: React.Context<any> = React.createContext(null)
OverlayContext.displayName = 'OverlayContext'
const { Provider, Consumer } = OverlayContext

export { Consumer as OverlayConsuer }

type Props = {
  children: React.ReactNode
}

export function OverlayProvider(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false)

  const state = {
    isOpen,
    setIsOpen
  }

  return <Provider value={state}>{props.children}</Provider>
}
