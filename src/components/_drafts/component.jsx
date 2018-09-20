// function-based component
import React from 'react';
const Something = () => (<h1>Something</h1>);
export default Something;


// class-based component (when need change state)
import React, { Component } from 'react';
class Life extends Component {
  state = { some: 'Some' }
  changeName = () => this.setState({ some: 'Some another'})

  render() {
    return (<h1 onClick={this.changeName}>{this.state.some}</h1>);
  }
}
export default Life;
