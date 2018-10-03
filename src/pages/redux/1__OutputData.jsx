import React from 'react';
// 1. import connect
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const OutputData = props => {
  // 4. output data from the store to component
  const { users, number, testColor } = props;
  return(
    <main className="redux">
      <h4>Get item data from the store</h4>
      <b>
        {users[0]}
      </b><br />
      <b>
        {number}
      </b> <br />
      <b style={{color: testColor}}>Some text</b> <hr />

      <h4>Maping data from the store</h4>
      <ul style={{ textAlign: 'left' }}>
        {users.map((item, index) => <li key={index}>{item}</li>)}
      </ul><hr />
    </main>
  );
};

const mapStateToProps = state => {
  return {
    // 3. save data from state to props (from initialState)
    users: state.testData.users,
    number: state.testData.number,
    testColor: state.testData.testColor,
  };
};

// 2. connect component to the store
export default connect(mapStateToProps, null)(OutputData);


OutputData.propTypes = {
  users: PropTypes.array,
  number: PropTypes.number,
  testColor: PropTypes.string,
};
