import React, { Component } from 'react'

class StateClass extends Component {
  state = {
    name: 'John Smith',
    age: 32,
    something: true
  }
  someClassMethod = () => {
    this.setState({
      something: !this.state.something // toggle something
    })
  };
  render() {
    const {name, age} = this.props;
    return (
      <div onClick={this.someClassMethod}>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}
export default StateClass;

// можно писать функцию прямо в онКлик
// onClick = {
//   this.setState({
//     something: !this.state.something // toggle something
//   })
// }
