import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
  render() {
    const {count, handleCount, name} = this.props
    return (
      <div>
        <button onClick={handleCount}>{name} Clicked {count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter)