const getMessages = async (locale: string) => {
  if (locale) {
    return require(`./${locale}.json`)
  }
  return require(`./en.json`)
}

export default getMessages
