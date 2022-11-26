import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  render() {
    const {count, handleCount} = this.props
    return (
      <div>
        <label onMouseOver={handleCount}>Hovered {count} times</label>
      </div>
    )
  }
}

export default withCounter(HoverCounter)