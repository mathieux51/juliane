const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  env: {
    RECAPTCHA_CLIENT_SIDE: process.env.RECAPTCHA_CLIENT_SIDE
  }
})
