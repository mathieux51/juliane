import { css } from 'styled-components'
import sizes from '../style/sizes'
// import pathToRegexp from 'path-to-regexp'
// import accepts from 'accepts'
// import { IncomingMessage } from 'http'
// import { supportedLocales } from '../constants/constants'

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

// /*
//   getLangFromURL returns null if cannot get lang from URL (/:lang)
//   or if language it not supported
// */
// function getLangFromURL(URL: string): string | null {
//   if (!URL) {
//     return null
//   }
//   const keys: pathToRegexp.Key[] = []
//   const pathRegexp = pathToRegexp('/:lang/:page*', keys)
//   const r = pathRegexp.exec(URL)

//   const lang =
//     r && keys.length
//       ? keys.reduce((acc, k, i) => {
//           if (k.name === 'lang') {
//             acc = r[i + 1]
//           }

//           return acc
//         }, '')
//       : null

//   if (!lang) {
//     return null
//   }

//   // if don't support this language maybe we will support browser language
//   if (supportedLocales.includes(lang)) {
//     return lang
//   }

//   return null
// }

// /*
//   getLangFromBrowser extract locale and return it if browser has supportedLocales
// */
// function getLangFromBrowser(req: IncomingMessage): string | null {
//   const accept = accepts(req)
//   const locale = accept.language(supportedLocales)
//   if (!locale) {
//     return null
//   }

//   return locale
// }

// export function getLocale(
//   pathname: string | null,
//   req: IncomingMessage | undefined
// ): string {
//   let localeFallback: string = 'en'

//   if (!pathname) {
//     return localeFallback
//   }

//   const langFromURL = getLangFromURL(pathname)
//   if (langFromURL) {
//     return langFromURL
//   }

//   if (!req) {
//     return localeFallback
//   }

//   const langFromBrowser = getLangFromBrowser(req)
//   if (langFromBrowser) {
//     return langFromBrowser
//   }

//   return localeFallback
// }
