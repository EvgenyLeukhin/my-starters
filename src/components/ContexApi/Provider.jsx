import React, { Component } from 'react';

const Contex = React.createContext();


// global state
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 0,
        name: 'John Jeyson',
        email: 'js@gmail.json',
        city: 'New York JS'
      },
      {
        id: 1,
        name: 'Adam Jeyson',
        email: 'aa@gmail.json',
        city: 'Chicago JS'
      }
    ]
  }

  render() {
    return (
      <Contex.Provider valur={this.state}>
        {this.props.children}
      </Contex.Provider>
    )
  }
}

// actions
export const Consumer = Contex.Consumer;

