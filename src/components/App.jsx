import React, { Component } from 'react';
// import OutputData from './OutputData';
import Events from './Events';


class App extends Component {
  render() {
    return (
      <div className='container'>
        {/* <OutputData/> */}
        <Events/>
      </div>
    )
  }
}

export default App;