import React, { Component } from 'react'

class StateClass extends Component {
  state = {
    name: 'John Smith',
    age: 32
  }
  someClassMethod = () => {
    // do something
  };
  render() {
    const {name, age} = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}
export default StateClass;
