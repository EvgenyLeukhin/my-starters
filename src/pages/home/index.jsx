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
  ]
};


const Person = props => {
  const { name, age, city } = props.personProps;
  return(
    <div>
      <span>{name}</span> - <span>{age}</span> - <b>{city}</b>
    </div>
  );
};

const Home = () => (
  <main className="home">
    <Helmet title='Home page' />
    <h1>Home page <FontAwesome name={'home'} spin={false} style={{ color: 'green' }} /></h1>
    <Link to='about'><img src={Mobile} alt="alt text" width={250} /> </Link>
    <p>Some content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam ipsum iure similique, culpa eum reiciendis tenetur ipsam, doloremque cupiditate molestiae! Totam quasi, dolorum reprehenderit vero ea eos culpa error?</p>
    <hr/>
    <h3>Maping data</h3>
    <div>
      {data.persons.map((item, index) =>
        // Classical aproach
        // <Person
        //   name={item.name}
        //   age={item.age}
        //   city={item.city}
        //   key={index}
        // />

        // short way
        <Person
          personProps={item}
          key={index}
        />
      )}
    </div>
  </main>
);

export default Home;
