import initialState from './initial-state.json';
// import { combineReducers } from 'redux';

import {
  PLUS,
  PLUS_10,
  MINUS,
  MINUS_10,
  ADD_ZERO,
  CHANGE_TEXT,
  MOVIES_LIST,
  DIRECTORS_LIST,
} from './../types';


// all reducers is a functions
const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    // 2__ChangeDataInside
    case PLUS:           return { ...state,    counter: ++state.counter };
    case MINUS:          return { ...state,    counter: --state.counter };
    case PLUS_10:        return { ...state,    counter: state.counter + action.val };
    case MINUS_10:       return { ...state,    counter: state.counter - action.val };
    case CHANGE_TEXT:
      return {
        ...state,
        text: state.text2,
        button: state.button2
      };

    // 3__ChangeDataOutside
    case ADD_ZERO:       return { ...state,    counter2: state.counter2 * action.payload };


    case MOVIES_LIST:    return { ...state,     movies:  action.payload };
    case DIRECTORS_LIST: return { ...state,  directors:  action.payload };



    default: return state;
  }
};

// const rootReducer = combineReducers({
//   testReducer
// });

export default rootReducer;
