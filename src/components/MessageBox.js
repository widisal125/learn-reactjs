import React, { Component } from 'react'

class MessageBox extends Component {

  constructor(props) {
    super(props)
  }

  showMessage = () => {
    alert('My Message')
  }

  render() {
    return (
      <div>MessageBox</div>
    )
  }
}

export default MessageBox