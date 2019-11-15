import React from 'react'
import { NextPageContext } from 'next'
import { languageFromContext } from '../helpers/helpers'
import Projects from '../components/Projects'

export default class extends React.PureComponent {
  static async getInitialProps(ctx: NextPageContext) {
    return { language: languageFromContext(ctx) }
  }
  render() {
    return (
      <Projects />
    )

  }
}
