import React, { Component } from 'react';
import ServerAPI from './ServerAPI';
// import OutputData from './OutputData';
// import Events from './Events';
// import ContexApi from './ContexApi';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <ServerAPI/>
        {/* <OutputData/> */}
        {/* <Events/> */}
        {/* <ContexApi/> */}
      </div>
    )
  }
}

export default App;