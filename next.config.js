/* eslint @typescript-eslint/no-var-requires: 0 */
const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withCSS({
    publicRuntimeConfig: {
      // Will be available on both server and client
      RECAPTCHA_CLIENT_SIDE: process.env.RECAPTCHA_CLIENT_SIDE,
    },
  })
)
