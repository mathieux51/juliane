import React from 'react'

type OverlayState = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  overlayChildren: React.JSX.Element | null
  render: React.Dispatch<React.SetStateAction<React.JSX.Element | null>>
}

const OverlayContext = React.createContext<OverlayState | null>(null)
OverlayContext.displayName = 'OverlayContext'

const { Provider, Consumer } = OverlayContext
export { Consumer as OverlayConsuer, OverlayContext }

type Props = {
  children: React.ReactNode
}

function OverlayProvider({ children }: Props) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [overlayChildren, render] = React.useState<React.JSX.Element | null>(
    null,
  )

  const state: OverlayState = {
    isOpen,
    setIsOpen,
    overlayChildren,
    render,
  }

  return <Provider value={state}>{children}</Provider>
}

export default OverlayProvider
