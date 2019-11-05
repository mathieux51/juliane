import React from 'react'
import { NextPageContext } from 'next'
import Router from 'next/router'

export default class extends React.PureComponent {
  static async getInitialProps(ctx: NextPageContext) {
    if (ctx.res) {
      ctx.res.writeHead(301, {
        Location: '/en'
      })
      ctx.res.end()
    } else {
      Router.push('/en')
    }
    return {}
  }
}
