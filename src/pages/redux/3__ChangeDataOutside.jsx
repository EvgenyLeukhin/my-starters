import React from 'react';
import { connect } from 'react-redux';            // импортируем connect
import { bindActionCreators } from 'redux';       // импортируем функцию для actions
import { addZero } from './../../store/actions';  // импортируем actions
import PropTypes from 'prop-types';

const ChangeDataOutside = props => {
  const { counter2 } = props;
  return(
    <div style={{marginTop: 50}}>
      <h4>Change data outside component</h4>
      <b>{counter2}</b> <br/>
      <button onClick={props.addZero}>Add 0</button>
    </div>
  );
};

const mapStateToProps = state => {
  // данные из store сохраняем в props
  return { counter2: state.counter2 };
};

const mapDispatchToProps = dispatch => {
  // сохраняем actions
  return bindActionCreators({ addZero }, dispatch);
};

// подключаем store
export default connect(mapStateToProps, mapDispatchToProps)(ChangeDataOutside);

ChangeDataOutside.propTypes = {
  addZero: PropTypes.func,
  counter2: PropTypes.number,
};
