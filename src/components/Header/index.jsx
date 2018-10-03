import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/lib/fa';
import './style.scss';

const styles = { color: 'deeppink' };

const Header = (props) => {
  return(
    <header className="page-header">
      <nav>
        <ul>
          <li><FaBars onClick={props.toggleNav} style={{cursor: 'pointer'}} size={18}/></li>
          <li><NavLink exact activeStyle={styles} to='/'>Home</NavLink></li>
          <li><NavLink activeStyle={styles} to='/redux'>Redux</NavLink></li>
          <li><NavLink activeStyle={styles} to='/bootstrap'>Bootstrap</NavLink></li>
          <li><NavLink activeStyle={styles} to='/modal'>Modal</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
