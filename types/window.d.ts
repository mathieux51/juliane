import { ServerState } from '../helpers/helpers'

interface Window {
  __SERVER_STATE__: ServerState
}
