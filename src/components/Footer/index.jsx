import React from 'react';
import './style.scss';

const year = (new Date()).getFullYear();

const Footer = () => (
  <footer>footer - {year}</footer>
);

export default Footer;