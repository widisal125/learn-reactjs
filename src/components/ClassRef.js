import React, { Component } from 'react'
import MessageBox from './MessageBox'

class ClassRef extends Component {
  constructor(props) {
    super(props)
  
    this.mbRef = React.createRef();
  }

  handleClick = () => {
    this.mbRef.current.showMessage();
  }

  render() {
    return (
      <div>
        <MessageBox ref={this.mbRef} />
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

export default ClassRef