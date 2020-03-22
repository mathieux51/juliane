const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  publicRuntimeConfig: {
    // Will be available on both server and client
    RECAPTCHA_CLIENT_SIDE: process.env.RECAPTCHA_CLIENT_SIDE
  }
})
