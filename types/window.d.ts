interface ServerState {
  user?: {
    id: string
    name: string
  }
  isLoggedIn: boolean
}

interface Window {
  __SERVER_STATE__: ServerState
}
