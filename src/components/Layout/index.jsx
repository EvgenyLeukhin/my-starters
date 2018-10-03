import React  from 'react';

import Routes from './../Routes';
import Header from './../Header';
import SideNav from './../SideNav';
import Footer from './../Footer';

import './style.scss';

export default class Layout extends React.Component {
  state = {
    showNav: false
  }

  toggleSideNav = (action) => this.setState({ showNav: action });

  render() {
    return(
      <div className="page-wrapper">
        <Header
          toggleNav={() => this.toggleSideNav(true)}  // open Nav on click
        />
        <SideNav
          showNav={this.state.showNav}                // show by state
          onHideNav={() => this.toggleSideNav(false)} // close Nav on click
        />
        <Routes/>
        <Footer/>
      </div>
    );
  }
}
