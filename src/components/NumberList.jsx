import React from 'react'

function ListItems(props) {
  return <li>{props.value}</li>
}

export default function NumberList(props) {
  const listItems = props.numbers.map((number) =>
    <ListItems 
      key = {number.toString()}
      value = {number}
    />
  )
  return (
    <ul>{listItems}</ul>
  )
}
