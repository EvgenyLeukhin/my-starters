import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// for ReduxDevTools
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default createStore(rootReducer, enhancer);
