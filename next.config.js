const withCSS = require('@zeit/next-css')
const languages = ['en', 'de', 'fr']

const isServer = typeof window === 'undefined'
global.HTMLElement = isServer ? Object : window.HTMLElement
global.customElements = isServer
  ? { define: function() {} }
  : window.customElements
//

module.exports = withCSS({
  // target: 'serverless',
  exportPathMap(defaultPathMap) {
    const pathMap = {}

    Object.entries(defaultPathMap).forEach(([key, value]) => {
      languages.forEach(language => {
        pathMap[`/${language}${key}`] = { ...value, query: { language } }
      })
    })

    return pathMap
  }
})
