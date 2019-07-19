function getLang({ lang }) {
  switch (lang) {
    case "en":
    case "fr":
    case "de":
      return { lang }
    default:
      return { lang: "en" }
  }
}

export default getLang
