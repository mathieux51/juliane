// helpers/helpers.ts
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { css, SimpleInterpolation } from 'styled-components'
import sizes from '../style/sizes'

/** True when executing on the server (no `window`). */
export const isServer = typeof window === 'undefined'

/**
 * A tagged-template helper that creates min-width media queries.
 * Usage:
 *   ${media.small`color: red;`}
 */
type CssTemplateFn = (
  literals: TemplateStringsArray,
  ...placeholders: Readonly<SimpleInterpolation[]>
) => string

export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (literals, ...placeholders) =>
      css`
        @media (min-width: ${sizes[label] / 20}em) {
          ${css(literals, ...placeholders)};
        }
      `.join('')
    return acc
  },
  {} as Record<keyof typeof sizes, CssTemplateFn>,
)

/* ------------------------------------------------------------------ */
/*                              Server state                          */
/* ------------------------------------------------------------------ */

/** The shape of `window.__SERVER_STATE__` that we inject on SSR. */
export interface ServerState {
  language: string
  /** i18n message catalogue produced by next-intl/react-intl. */
  messages: Record<string, string>
}

/**
 * Pull the SSR-injected state from the global window (client-side only).
 *
 * Returns `null` on the server or if the field is missing.
 */
export const getServerState = (): ServerState | null =>
  !isServer &&
  ((window as Window & { __SERVER_STATE__?: unknown })
    .__SERVER_STATE__ as ServerState | null)
