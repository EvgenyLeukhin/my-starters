import React, { Component } from 'react';
import Contacts from './Contacts';
import dataJson from './../OutputData/data.json';

class Events extends Component {
  // переносим json в state
  state = { 
    data: dataJson
  }

  // оперируем id
  // deleteContact = (id) => {
  //   // копия data
  //   const contactsCopy = this.state.data.contacts;
  //   const newContacts = contactsCopy.filter(item => 
  //     item.id !== id
  //   );
  //   this.setState({data:newContacts});
  // }

  render() {
    // мапируем data из state
    const {data} = this.state;
    return (
      <div>
        {data.contacts.map((items)  => (
          <Contacts 
            key={items.id}
            contactsData={items} 
            // click={this.deleteContact.bind(this, items.id)} // onClick as prop
          />
        ))}
      </div>
    )
  }
}

export default Events;
