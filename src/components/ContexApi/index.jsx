import React, { Component } from 'react';
import { Provider, Consumer } from './Provider'

class ContextApi extends Component {
  render() {
    return(
      <Consumer/>
    )
    return (
      <Provider>
      </Provider>
    );
  }
}

export default ContextApi;