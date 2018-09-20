import {
  MOVIES_LIST,
  DIRECTORS_LIST,
  ADD_ZERO
} from './../types';

export function moviesList() {
  return {
    type: MOVIES_LIST,
    payload: [
      { id: 1, name: 'Film 1' },
      { id: 2, name: 'Film 2' },
      { id: 3, name: 'Film 3' },
    ]
  };
}

export function directorsList() {
  return {
    type: DIRECTORS_LIST,
    payload: [
      { id: 1, name: 'Q. Tarantino' },
      { id: 2, name: 'M. Scorcese' },
      { id: 3, name: 'T. Kotcheff' },
    ]
  };
}

export function addZero() {
  return {
    type: ADD_ZERO,
    payload: 10,
  };
}


// list of actions
// all actions here
