import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
  render() {
    const {count, handleCount} = this.props
    return (
      <div>
        <button onClick={handleCount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter)