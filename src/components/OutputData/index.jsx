import React, { Component } from 'react';
import data from './data.json';


import Contacts from './Contacts';
import ContactsShort from './ContactsShort';

class OutputData extends Component {
  state={
    contacts: [
      {
        name: 'John Smith',
        email:'js@gmail.com',
        city: 'New York',
      },
      {
        name: 'Adam Anderson',
        email:'aa@gmail.com',
        city: 'Chicago',
      },
    ]
  }

  render() {
    // for short way
    const { contacts } = this.state;
    return (
      <div>
        <h2>Output data in React</h2>
        
        {/* Можно передать данные props напрямую */}
        <h4 className="text-info">1 - Inline data</h4>
        <Contacts
          name='John Smith'
          email='js@gmail.com'
          city='New York'
        />
        <Contacts
          name='Adam Anderson'
          email='aa@gmail.com'
          city='Chicago'
        />
        <hr/>

        {/* Можно передать данные props через state */}
        <h4 className="text-info">2 - Use state</h4>
        <Contacts
          name={this.state.contacts[0].name}
          email={this.state.contacts[0].email}
          city={this.state.contacts[0].city}
        />
        <Contacts
          name={this.state.contacts[1].name}
          email={this.state.contacts[1].email}
          city={this.state.contacts[1].city}
        />
        <hr/>

        {/* Можно передать данные props через state мапингом */}
        <h4 className="text-info">3 - Maping</h4>
        {this.state.contacts.map((item, index)  => (
          <Contacts
            name={item.name}
            email={item.email}
            city={item.city}
            key={index}
          />
        ))}
        <hr/>

        {/* Короткая запись мапинга*/}
        <h4 className="text-info">4 - Maping short</h4>
        {contacts.map((items, index)  => (
          <ContactsShort contactsData={items} key={index} />
        ))}
        <hr/>

        {/* Из JSON-файла*/}
        <h4 className="text-info">5 - Data from Json-file</h4>
        <Contacts
          name={data.contacts[0].name}
          email={data.contacts[0].email}
          city={data.contacts[0].city}
        />
        <hr/>

        {/* Мапинг из JSON-файла*/}
        <h4 className="text-info">6 - Maping from Json-file</h4>
        {data.contacts.map((item, index)  => (
          <Contacts
            name={item.name}
            email={item.email}
            city={item.city}
            key={index}
          />
        ))}
        <hr/>

        {/* Мапинг из JSON-файла - Короткая запись*/}
        <h4 className="text-info">7 - Maping from Json-file</h4>
        {data.contacts.map((items, index)  => (
          <ContactsShort 
            contactsData={items} 
            key={index} 
          />
        ))}
        <hr/>
      </div>
    )
  }
}
export default OutputData;