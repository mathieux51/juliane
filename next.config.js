const languages = ['en', 'de', 'fr']

module.exports = {
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
}
