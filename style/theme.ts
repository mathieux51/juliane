const colors = {
  white: '#fff',
  black: 'black',
  grey: '#F2F1ED',
  green: '#225B30',
  dgray: '#C4C4C4',
}

const theme = {
  fg: colors.black, // foreground primary
  fgs: colors.white, // foreground secondary secondary
  bg: colors.grey,
  ...colors,
}

export type AppTheme = typeof theme
export default theme
