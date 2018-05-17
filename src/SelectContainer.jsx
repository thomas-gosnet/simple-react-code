import React, { Component } from 'react'
import styled from 'styled-components'
import infosComponents from './components/index'

const Left = styled.div`
  margin-top: 3%;
  float: left;
  width: 45%;
`

export default class Select extends Component {
  constructor(props) {
    super(props)
    this.handleSelectedChange = this.handleSelectedChange.bind(this)
  }

  handleSelectedChange(e) {
    this.props.onSelectedChange(e.target.value)
  }

  render() {
    const options = []
    const select = []
    for (const prop in infosComponents) {
      options.push(<option key={prop}>{prop}</option>)
    }

    for (const prop in infosComponents) {
      prop === this.props.selected ? select.push(
        <div key={prop}>{infosComponents[prop]()}</div>
      ) : ''
    }

    return (
      <div>
        <div>
          <select value={this.props.selected} onChange={this.handleSelectedChange}>
            {options}
          </select>
        </div>
        <Left>
          {select}
        </Left>
      </div>
    )
  }
}
