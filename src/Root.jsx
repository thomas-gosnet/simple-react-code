import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import RenderJsx from './RenderJsx'
import SelectContainer from './SelectContainer'

const App = styled.div`
  text-align: center;
`

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'Toogle' }
    this.handleSelectedChange = this.handleSelectedChange.bind(this)
  }

  handleSelectedChange(selected) {  //Pay intention!!
    this.setState({ selected: selected })
  }

  render() {
    return (
      <App>
        <Header />
        <SelectContainer
          selected={this.state.selected}
          onSelectedChange={this.handleSelectedChange}
        />
        <RenderJsx
          selected={this.state.selected}
        />
      </App>
    )
  }
}