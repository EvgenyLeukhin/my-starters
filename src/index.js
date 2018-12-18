import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './js/redux/rootReducer';
import enhancer from './js/redux/enhancer';

ReactDOM.render(
  <Provider store={createStore(rootReducer, enhancer)}>
    <App />
  </Provider>, 

  document.getElementById('root')
);
