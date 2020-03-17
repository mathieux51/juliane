import { css } from 'styled-components'
import sizes from '../style/sizes'

export const isServer = typeof window === 'undefined'

export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
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
    (l: TemplateStringsArray, ...p: any[]) => string
  >
)

export const getState = () => {
  try {
    return window.__SERVER_STATE__
  } catch (error) {
    console.error(error)
  }
}
