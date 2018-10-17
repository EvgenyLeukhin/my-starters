import React, { Component } from 'react'

class Contact extends Component {
  render() {
    const { name, age } = this.props.contact;
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}

export default class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John',
          age: 32,
        },
        {
          id: 2,
          name: 'Jack',
          age: 33,
        },
      ]
    }
  }
  render() {
    const {contacts} = this.state;
    return (
      <div>
        {contacts.map(item => (
          // <Contact
          //   name={item.name}
          //   age={item.age}
          //   key={item.id}
          // />

          <Contact contact={item} /> // short way
        ))}
      </div>
    )
  }
}
