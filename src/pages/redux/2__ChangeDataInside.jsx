import React from 'react';
import { connect } from 'react-redux';  // 1. import connect
import PropTypes from 'prop-types';

// 2. import types
import { PLUS, PLUS_10, MINUS, MINUS_10, CHANGE_TEXT } from './../../store/types';

const ChangeDataInside = props => (
  <div className="redux-counter">
    <h4>Change data - actions inside component</h4>
    {/* // 5. output data from the store to component */}
    <span>{props.counter}</span>
    <div>
      <button onClick={props.plus}>+</button>
      <button onClick={props.minus}>&ndash;</button>
      <button onClick={props.plus10}>+10</button>
      <button onClick={props.minus10}>&ndash;10</button>
    </div>
    <br /><br />
    <button
      onClick={props.changeText}
      style={{ width: 'auto' }}
      className={`button ${props.button}`}>
      Change text
    </button> &ndash; <b>{props.text}</b>
  </div>
);

// 4. save data from state to props
const mapStateToProps = state => {
  return {
    counter: state.counter,
    text: state.text,
    button: state.button
  };
};

// actions-method in the current component
const mapDispatchToProps = dispatch => {
  return {
    // 6. Create action-methods (save in props) to refer to the reducer, which change data in the store
    // all logic in reducers
    plus:       () => dispatch({ type: PLUS }),
    minus:      () => dispatch({ type: MINUS }),
    plus10:     () => dispatch({ type: PLUS_10, val: 10 }),
    minus10:    () => dispatch({ type: MINUS_10, val: 10 }),
    changeText: () => dispatch({ type: CHANGE_TEXT })
  };
};

// 3. connect component to the store
export default connect(mapStateToProps, mapDispatchToProps)(ChangeDataInside);

// PropTypes
ChangeDataInside.propTypes = {
  plus: PropTypes.func,
  minus: PropTypes.func,
  plus10: PropTypes.func,
  minus10: PropTypes.func,
  changeText: PropTypes.func,
};
