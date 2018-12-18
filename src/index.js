import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import './css/style.css';

import * as serviceWorker from './js/serviceWorker';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

serviceWorker.unregister();
