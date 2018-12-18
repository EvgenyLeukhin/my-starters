import React, { Component } from 'react';
import { connect } from 'react-redux';

import './../css/style.css';

// Вытаскивает данные из store
const mapStateToProps = store => {
  return { counter: store.counter }
}

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        {this.props.counter}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App)
