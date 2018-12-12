import React, { Component } from 'react';
import Contacts from './Contacts';
import dataJson from './../OutputData/data.json';

class Events extends Component {
  // переносим json в state
  state = { 
    data: dataJson
  }

  changeState = (id) => {
    alert(id);
  }

  render() {
    // мапируем data из state
    const {data} = this.state;
    return (
      <div>
        {data.contacts.map((items)  => (
          <Contacts 
            key={items.id}
            contactsData={items} 
            click={this.changeState.bind(this, items.id)}
          />
        ))}
      </div>
    )
  }
}

export default Events;
