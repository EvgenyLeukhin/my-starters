import React from 'react'

const ContactsShort = (props) => {
  const {name, email, city} = props.contactsData;
  return(
    <div className="card">
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
}

export default ContactsShort;
