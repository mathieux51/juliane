import 'styled-components'
import type { AppTheme } from '../style/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
