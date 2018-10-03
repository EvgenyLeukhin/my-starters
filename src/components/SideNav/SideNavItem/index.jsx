import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './style.scss';

const links = [
  {
    linkText: 'Home',
    icon: 'home',
    path: '/',
  },
  {
    linkText: 'Redux',
    icon: 'info',
    path: '/redux',
  },
  {
    linkText: 'Bootstrap',
    icon: 'tree',
    path: '/bootstrap',
  },
  {
    linkText: 'Modal',
    icon: 'tree',
    path: '/modal',
  },
  {
    linkText: 'Form',
    icon: 'square',
    path: '/form',
  },
  {
    linkText: 'Form 2',
    icon: 'square',
    path: '/form2',
  },
];

const sidenavItem = (props) => links.map((item, index) => {
  return (
    <div className="sidenav-item" key={index}>
      <NavLink to={item.path} onClick={props.onHideNav} exact>
        <FontAwesome name={item.icon} spin={false} style={{ color: 'green' }} />
        <span>{item.linkText}</span>
      </NavLink>
    </div>
  );
});


export default sidenavItem;
