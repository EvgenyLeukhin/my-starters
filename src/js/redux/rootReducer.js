// if many reducers
// import { combineReducers } from 'redux'

// if big state
// import initialState from './initialState.json';

const initialState = {
  counter: 0,
};

// types const - for easy debuging
const PLUS = 'PLUS';
const MINUS = 'MINUS';


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:  return { ...state, counter: ++state.counter };
    case MINUS: return { ...state, counter: --state.counter };

    default: return state;
  }
};

export default rootReducer;