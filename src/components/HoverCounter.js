import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  render() {
    const {count, handleCount, name} = this.props
    return (
      <div>
        <label onMouseOver={handleCount}>{name} Hovered {count} times</label>
      </div>
    )
  }
}

export default withCounter(HoverCounter)