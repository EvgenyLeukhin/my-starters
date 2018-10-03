import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItem from './SideNavItem';
import './style.scss';

const SideBar = (props) => (
  // <SideNav/>
  <SideNav
    showNav={props.showNav}
    onHideNav={props.onHideNav}
    title='Open From right'
  >
    <SideNavItem {...props} />
  </SideNav>
);

export default SideBar;
