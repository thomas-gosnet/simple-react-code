import React, {Component} from 'react'

export default class Repeat extends Component {
  render() {
    const listItems = this.props.items.map((item) => {
      return (
        <li key={item.name}>
          <a href={item.link}>{item.name}</a>
        </li>
      )
    })

    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}