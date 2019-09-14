import i18next from 'i18next'
import en from '../i18n/en'
import de from '../i18n/de'
import fr from '../i18n/fr'

function initI18n(lng = 'en') {
  i18next.init({
    lng,
    resources: {
      en,
      de,
      fr
    }
  })

  return i18next
}

export default initI18n
