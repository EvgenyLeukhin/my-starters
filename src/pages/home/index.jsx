import React from 'react';
import Helmet from 'react-helmet';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import Mobile from './img/mobile.png';

const data = {
  persons: [
    {
      name: 'John',
      age: 32,
      city: 'Dallas',
    },
    {
      name: 'Jack',
      age: 33,
      city: 'Toronto',
    },
    {
      name: 'Paul',
      age: 30,
      city: 'Antario ',
    },
  ]
};

class Person extends React.Component {
  state = {
    dataShow: true
  }
  // all logic inside current component
  showDataToggle = () => {
    this.setState({ dataShow: !this.state.dataShow});
  }


  showAge = age => console.log(age);

  render() {
    const { name, age, city } = this.props.personProps;
    return (
      <div style={{marginBottom: 15}}>
        <strong onClick={this.showDataToggle} style={{cursor: 'pointer'}}>{name}</strong>
        { this.state.dataShow ?
          <React.Fragment>
            <span onClick={this.showAge.bind(this, age)}> - {age}, </span>
            <b>{city}</b>
            <span onClick={this.props.deleteHandler} style={{float: 'right'}}>Delete it</span>
          </React.Fragment> : null }
      </div>
    );
  }
}

class Home extends React.Component {
  state = {

  };
  deleteHandler = () => {
    console.log(123);
  };
  render() {
    return(
      <main className="home">
        <Helmet title='Home page' />
        <h1>Home page <FontAwesome name={'home'} spin={false} style={{ color: 'green' }} /></h1>
        <Link to='about'><img src={Mobile} alt="alt text" width={250} /> </Link>
        <p>Some content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam ipsum iure similique, culpa eum reiciendis tenetur ipsam, doloremque cupiditate molestiae! Totam quasi, dolorum reprehenderit vero ea eos culpa error?</p>
        <hr />

        <h3>Maping data</h3>
        <div>
          {data.persons.map((item, index) =>
            <Person personProps={item} key={index} deleteHandler={this.deleteHandler} />
          )}
        </div>
      </main>
    );
  }
}

export default Home;


// method with parametr - BIND
// onClick={this.showDataToggle.bind(this, name)}
// showDataToggle = name => {
//   console.log(name);
// }
