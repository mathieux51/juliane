import styled from 'styled-components'
import Link from 'next/link'

const Header = styled.header.attrs({ className: 'flex fxd-c' })``

type Props = {}

const _Header: React.FunctionComponent<Props> = () => (
  <Header>
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
