/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ['en', 'de', 'fr'],
    defaultLocale: 'en',
    // localeDetection: true,
  },
  compiler: {
    styledComponents: true,
  },
}

console.log('localeDetection:', nextConfig.i18n.localeDetection)
console.log('Type of localeDetection:', typeof nextConfig.i18n.localeDetection)

module.exports = nextConfig
