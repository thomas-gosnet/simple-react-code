import React, { Component } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import styled from 'styled-components'
import axios from 'axios'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/jsx/jsx'

const Right = styled.div`
  margin-top: 3%;
  float: right;
  width: 55%;
  text-align: left;
  .react-codemirror2, .CodeMirror{
    height: auto;
    max-width: 98%;
  } 
`

const codeMirrorOptions = {
  mode: 'jsx',
  theme: 'material',
  lineNumbers: true,
}

function getContent(selected) {
  return axios.get(`https://raw.githubusercontent.com/thomas-gosnet/simple-react-code/master/src/components/${selected}.jsx`)
    .then(({ data } = fetch.data) => data)
}

export default class RenderJsx extends Component {
  constructor(props) {
    super(props)
    this.state = { data: '' }
  }

  componentDidMount() {
    getContent(this.props.selected)
      .then(data => this.setState({ data }))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      getContent(nextProps.selected)
        .then(data => this.setState({ data }))
    }
  }

  componentWillUnmount() { }

  render() {
    return (
      <Right>
        <CodeMirror value={this.state.data} options={codeMirrorOptions} />
      </Right>
    )
  }
}
