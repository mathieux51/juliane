import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Header = styled.header.attrs({ className: 'flex fxd-c' })`
  border: 1px solid black;
  width: 100vw;
  padding: 0 1rem;
`

type Props = {}

const _Header: React.FC<Props> = () => (
  <Header>
    <h1>Juliane Hendershot</h1>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <Link href='/about'>
      <a>About</a>
    </Link>
    <Link href='/contact'>
      <a>Contact</a>
    </Link>
  </Header>
)


export default _Header
