// if many reducers
// import { combineReducers } from 'redux'

// if big state
// import initialState from './initialState.json';

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    default: return state;

  }
};

export default rootReducer;