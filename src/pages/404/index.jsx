import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
// import './style.scss';

const Page404 = () => (
  <main className="page-404">
    <Helmet title='404 page' />
    <h1>404 page</h1>
    <p>This page is doesn't exist!</p>
    <p><Link to="/">back to home page</Link></p>
  </main>
);

export default Page404;