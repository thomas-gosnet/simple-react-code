import React, {Component} from 'react'

function WarningBanner(props) {
  if (!props.warn) {
    return null
  }

  return (
    <div className="warning">
      Warning!
    </div>
  )
}

export default class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
        <WarningBanner warn={this.state.showWarning} />
      </div>
    )
  }
}