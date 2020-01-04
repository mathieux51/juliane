import { css } from 'styled-components'
import sizes from '../style/sizes'
import { NextPageContext } from 'next'

export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (max-width: ${sizes[label] / 16}em) {
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

// export function get<T>(
//   obj: { [key: string]: T },
//   path: string,
//   defaultValue?: T
// ): T {
//   const result = String.prototype.split
//     .call(path, /[,[\].]+?/)
//     .filter(Boolean)
//     .reduce(
//       (res, key) => (res !== null && res !== undefined ? res[key] : res),
//       obj
//     )
//   return result === undefined || result === obj ? defaultValue : result
// }

export function languageFromContext(ctx: NextPageContext): string {
  let localeFallback: string = 'en'

  if (ctx && ctx.query) {
    return Array.isArray(ctx.query.language)
      ? ctx.query.language[0]
      : ctx.query.language
  }

  return localeFallback
}

export const isProd = process.env.NODE_ENV !== 'development'
export const isDev = !isProd