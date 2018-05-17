import React, { Component } from 'react'

function formatDate(date) {
  return date.toLocaleDateString()
}

class Avatar extends Component {
  render() {
    return (
      <img className="Avatar"
        src={this.props.user.avatarUrl}
        alt={this.props.user.name}
      />
    )
  }
}

class UserInfo extends Component {
  render() {
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">
          {this.props.user.name}
        </div>
      </div>
    )
  }
}

export default class Comment extends Component {
  render() {
    return (
      <div>
        <div className="Comment">
          <UserInfo user={this.props.author} />
          <div className="Comment-text">
            {this.props.text}
          </div>
          <div className="Comment-date">
            {formatDate(this.props.date)}
          </div>
        </div>
      </div>
    )
  }
}
