import React, { Component } from 'react'

class InsertListTest extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: '',
      namelist: ['Amal', 'Kamal', 'Nimal'],
    }
  }

  addToList = () => {
    let newName = this.state.name;
    this.setState({
      name: '',
      namelist: [newName, ...this.state.namelist]
    });
  }
  
  render() {
    return (
      <div>
        {this.state.namelist.map((n, i) => <p key={i}>{n}</p>)}
        <div>
          <p><input type="text" value={this.state.name} onChange={(e) => this.setState({...this.state, name: e.target.value})} /></p>
          <p><button onClick={this.addToList}>add</button></p>
        </div>
      </div>
    )
  }
}

export default InsertListTest
