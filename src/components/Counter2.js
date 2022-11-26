import React, { Component } from 'react'

class Counter2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }
  handleCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1}
    })
  }
  render() {
    return (
      <div>
        {this.props.children(this.state.count, this.handleCount)}
      </div>
    )
  }
}

export default Counter2