import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
`

export default class extends React.PureComponent {
  render() {
    return (
      <div>
        <Title>🏡 Home</Title>
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
      </div>
    )
  }
}
