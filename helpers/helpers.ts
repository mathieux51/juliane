import { css } from 'styled-components'
import sizes from '../style/sizes'

export const isServer = typeof window === 'undefined'

export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (min-width: ${sizes[label] / 20}em) {
          ${css(literals, ...placeholders)};
        }
      `.join('')
    return acc
  },
  {} as Record<
    keyof typeof sizes | string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (l: TemplateStringsArray, ...p: any[]) => string
  >,
)

export type ServerState = {
  language: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: any
}

export const getServerState = (): ServerState | null =>
  (window as any).__SERVER_STATE__ ? (window as any).__SERVER_STATE__ : null
