import React from 'react'
import Link, { LinkProps } from 'next/link'
import { LanguageContext } from '../context/Language'
import { isDev } from '../constants/constants'

const _Link: React.FC<LinkProps> = props => {
  const { language } = React.useContext(LanguageContext)
  const href = isDev ? props.href : `/${language}${props.href}`
  return <Link href={href}>{props.children}</Link>
}

export default _Link
