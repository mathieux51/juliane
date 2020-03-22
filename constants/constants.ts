import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const isProd = process.env.NODE_ENV === 'production'

export const isDev = !isProd

export const defaultLanguage = 'en'

export const config = {
  RECAPTCHA_CLIENT_SIDE: isProd
    ? publicRuntimeConfig.RECAPTCHA_CLIENT_SIDE
    : '6LdGEuMUAAAAACFNXOljhnX9AmsO4OKXaayowpqF'
}
