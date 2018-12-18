import React, { Component } from 'react';
import { connect } from 'react-redux';

import './../css/style.css';

// Вытаскивает данные из store
const mapStateToProps = store => {
  return { counter: store.counter }
}

const mapDispatchToProps = dispatch => {
  return {
    plus:  () => dispatch({ type: 'PLUS' }),
    minus: () => dispatch({ type: 'MINUS' }),
  };
};

class App extends Component {
  render() {
    return (
      <div 
        className="app-wrapper" 
        style={{width: '100px', textAlign: 'center'}}
      >
        <p>{this.props.counter}</p>
        <button onClick={this.props.plus}>+</button>
        <button onClick={this.props.minus}>-</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
