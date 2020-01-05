export const isProd = process.env.NODE_ENV !== 'development'

export const isDev = !isProd

export const defaultLanguage = 'en'
