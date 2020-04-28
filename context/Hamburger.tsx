import React from 'react'

export const HamburgerContext: React.Context<any> = React.createContext(null)
HamburgerContext.displayName = 'HamburgerContext'
const { Provider, Consumer } = HamburgerContext

export { Consumer as HamburgerConsuer }

type Props = {
  children: React.ReactNode
}

function HamburgerProvider(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false)

  const state = {
    isOpen,
    setIsOpen,
  }

  return <Provider value={state}>{props.children}</Provider>
}

export default HamburgerProvider
