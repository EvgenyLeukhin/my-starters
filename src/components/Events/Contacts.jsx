import React from 'react'

class Contacts extends React.Component {

  state = {
    showContacts: true
  }

  toggleContent = () => {
    this.setState({showContacts: !this.state.showContacts})
  }

  // Нужно забайндить эти переменные
  // onClick={this.showData.bind(this, name, email, city)}
  // Можно передавать значения мапинга при клике

  // showData = (name, email, city) => {
  //   console.log("Name is " + name);
  //   console.log("Email is " + email);
  //   console.log("City is " + city);
  // }


  render() {
    const {name, email, city} = this.props.contactsData;

    const styles = {
      marginLeft: '10px',
      color: 'maroon',
      cursor: 'pointer',
    };

    const styles2 = {
      float: 'right',
      padding: '5px',
      color: '#dc3545',
      cursor: 'pointer'
    };

    return (
      <div className="card">
        <h4>
          {name}
          <i className="fa fa-sort-down" 
             style={styles}
             // onClick inside component
             onClick={this.toggleContent} /> 

          <i className="fa fa-times" 
             style={styles2}
             // onClick inside another component
             onClick={this.props.click} />
        </h4>
        {this.state.showContacts ? 
          <React.Fragment>
            <p>{email}</p>
            <p>{city}</p>
          </React.Fragment> : null
        }
      </div>
    );
  }
}

export default Contacts;
