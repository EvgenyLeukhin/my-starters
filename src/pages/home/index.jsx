import React from 'react';
import Helmet from 'react-helmet';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import Mobile from './img/mobile.png';

const Home = () => (
  <main className="home">
    <Helmet title='Home page' />
    <h1>Home page <FontAwesome name={'home'} spin={false} style={{ color: 'green' }} /></h1>
    <Link to='about'><img src={Mobile} alt="alt text" width={250} /> </Link>
    <p>Some content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam ipsum iure similique, culpa eum reiciendis tenetur ipsam, doloremque cupiditate molestiae! Totam quasi, dolorum reprehenderit vero ea eos culpa error?</p>
  </main>
);

export default Home;
