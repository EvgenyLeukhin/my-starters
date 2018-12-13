import React, { Component } from 'react';
import Contacts from './Contacts';
import dataJson from './../OutputData/data.json';

class Events extends Component {
  // переносим json в state
  state = { 
    contacts: dataJson.contacts,
  }

  deleteItem = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(item => {
      return item.id !== id;
    });
    this.setState({contacts: newContacts});
  }

  render() {
    // мапируем data из state
    const {contacts} = this.state;
    return (
      <div>
        {contacts.map((items)  => (
          <Contacts 
            key={items.id}
            contactsData={items} 
            click={this.deleteItem.bind(this, items.id)}
          />
        ))}
      </div>
    )
  }
}

export default Events;
