const colors = {
  // Core palette - sophisticated and modern
  white: '#FFFFFF',
  black: '#0A0A0A',
  charcoal: '#1A1A1A',
  slate: '#2D2D2D',

  // Background tones
  cream: '#FAFAF8',
  warmGrey: '#F5F5F3',
  lightGrey: '#EBEBEB',

  // Accent colors
  primary: '#1E3A5F', // Deep navy - professional and trustworthy
  primaryLight: '#2B4F7A',
  primaryDark: '#152A45',
  accent: '#C9A962', // Warm gold - premium feel for video production
  accentMuted: '#B89B52',

  // Text colors
  textPrimary: '#1A1A1A',
  textSecondary: '#4A4A4A',
  textMuted: '#717171',
  textLight: '#9A9A9A',

  // UI colors
  border: '#E0E0E0',
  borderLight: '#EBEBEB',
  success: '#2E7D4A',
  error: '#C53030',

  // Legacy (for backward compatibility)
  grey: '#F5F5F3',
  green: '#1E3A5F',
  dgray: '#E0E0E0',
  footerText: '#4A4A4A',
}

const theme = {
  // Spread all colors for direct access first
  ...colors,

  // Semantic tokens (override/alias colors)
  fg: colors.textPrimary,
  fgs: colors.white,
  bg: colors.cream,
  bgAlt: colors.warmGrey,
}

export type AppTheme = typeof theme
export default theme
