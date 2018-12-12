import React, { Component } from 'react'

class Contacts extends Component {
  render() {
    return(
      <div className="card">
        <h4>{this.props.name}</h4>
        <p>{this.props.email}</p>
        <p>{this.props.city}</p>
      </div>
    )
  }
}

export default Contacts;
