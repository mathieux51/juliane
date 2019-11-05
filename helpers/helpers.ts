import { css } from 'styled-components'
import { ServerResponse, IncomingMessage } from 'http'
import sizes from '../style/sizes'

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

// const supportedLanguages = ['en', 'fr', 'de']
type Req = IncomingMessage | undefined
type localeType = 'en' | 'fr' | 'de'
export function getLocale(req: Req): localeType {
  let locale: localeType = 'en'
  // if /en, /fr or /de
  // extract locale en return
  // if browser has supportedLanguages
  // const accept = accepts(req)
  // const locale = accept.language(supportedLanguages) || 'en'

  // return default locale
  return locale
}
