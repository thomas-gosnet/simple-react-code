import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import RenderJsx from './RenderJsx'
import SelectContainer from './SelectContainer'

const App = styled.div`
  text-align: center;
`

const InfosComponents = [
  { name: 'Toogle' },
  { name: 'FilterableProductTable' },
  { name: 'CalculatorTemp' },
  { name: 'NameForm' },
  { name: 'Comment' },
  { name: 'Clock' },
  { name: 'LoginControl' },
  { name: 'FlavorForm' },
  { name: 'EssayForm' },
  { name: 'Calculator' },
  { name: 'Mailbox' },
  { name: 'Page' },
  { name: 'Repeat' },
  { name: 'NumberList' },
  { name: 'Blog' },
  { name: 'Reservation' }
]

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
          InfosComponents={InfosComponents}
        />
        <RenderJsx
          selected={this.state.selected}
          onSelectedChange={this.handleSelectedChange}          
        />
      </App>
    )
  }
}