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
    max-width: 98%
  } 
`

export default class RenderJsx extends Component {
  constructor(props) {
    super(props)
    this.state = { fetch: '' }
  }

  componentDidMount() {
    return axios.get(`https://raw.githubusercontent.com/thomas-gosnet/simple-react-code/master/src/components/${this.props.selected}.jsx`)
      .then(fetch => {
        this.setState({ fetch: fetch.data })
      })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      return axios.get(`https://raw.githubusercontent.com/thomas-gosnet/simple-react-code/master/src/components/${nextProps.selected}.jsx`)
        .then(fetch => {
          this.setState({ fetch: fetch.data })
        })
    }
  }

  componentWillUnmount() { }

  render() {
    const options = {
      mode: 'jsx',
      theme: 'material',
      lineNumbers: true,
    }

    return (
      <Right>
        <CodeMirror value={this.state.fetch} options={options} />
      </Right>
    )
  }
}