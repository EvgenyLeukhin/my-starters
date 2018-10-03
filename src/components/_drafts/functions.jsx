// =========================== INLINE =========================== ->
// inline function in App.jsx
class App extends Component {
  render() {
    return(
      <a href="#" onClick={() => alert('Something')}>Some link</a>
    );
  }
}

// inline function in Component
const someComponent = () => {
  return (
    <a href="#" onClick={() => alert('Something')}>Some link</a>
  );
};
// =========================== INLINE =========================== -<




// Not very well !!!
// =========================== FROM the STATE =========================== ->
class App extends Component {
  state = {
    someFuncFromState: () => { alert('Are you sure?'); }
  };

  render() {
    return (
      <a href="#" onClick={this.state.someFuncFromState}>Some link</a>
    );
  }
}
// =========================== FROM the STATE =========================== -<





// =========================== FROM a COMPONENT =========================== ->
const someFuncFromComponent = () => alert('Clicked!');

const someComponent = () => {
  return (
    <a href="#" onClick={someFuncFromComponent}>Some link</a>
  );
};
// =========================== FROM a COMPONENT =========================== -<





// =========================== BEFORE RENDER =========================== ->
class App extends Component {

  someFuncBeforeRender = () => alert('Function before render!')

  render() {
    return (
      <a href="#" onClick={this.someFuncBeforeRender}>Some link</a>
    );
  }
}
// =========================== BEFORE RENDER =========================== -<





// =========================== USE PROPS =========================== ->
// in Component
const someComponent = (props) => {
  return (
    <a href="#" onClick={props.click}>Some link</a>
  );
};

// in App.jsx
class App extends Component {
  state = {
    someFuncFromState: () => { alert('Are you sure?'); }
  };
  someFuncBeforeRender = () => alert('Function before render!')

  render() {
    return (
      <div>
        {/* from the state */}
        <SomeComponent click={this.state.someFuncFromState} />
        {/* or before render */}
        <SomeComponent click={this.someFuncBeforeRender} />
      </div>
    );
  }
}
// if you are usinig props you bind the Component with App by props
// =========================== USE PROPS =========================== -<

// all changes in the state better to do in App.js, not in the Components





// =========================== WITH PARAMETRS =========================== ->
class App extends Component {

  writeName = (name) => alert(`Hello, ${name}!`);

  render() {
    return (
      <div>
        {/* 1 aproach - better way */}
        <SomeComponent click={this.writeName.bind(this, 'Zhenia')} />
        {/* 2 aproach  - 1 is better */}
        <SomeComponent click={() => writeName('Zhenia')} />
      </div>
    );
  }
}
// =========================== WITH PARAMETRS =========================== -<





// =========================== DUNAMIC OUTPUT =========================== ->
class App extends Component {

  state = {
    outputText: 'Some output text'
  }

  dunamicOutput = (e) => {
    this.setState({ outputText: e.target.value }); // change state
    console.log(e.target.value); // output in console
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.dunamicOutput} />
        <p>{this.state.outputText}</p>
      </div>
    );
  }
}
// =========================== DUNAMIC OUTPUT =========================== -<



// =========================== LIFECYCLE  =========================== ->
import React, { Component } from 'react';
class Life extends Component {
  // 1. get default props - ReactRouter

  // 2. set default state
  state = {some: 'Some'}

  componentWillMount() {} // 3. do something before render jsx

  render() { // 4. render JSX
    return( <h1>{this.state.some}</h1> );
  }

  componentDidMount() { } // 5. do something after render jsx
}

export default Life;
// =========================== LIFECYCLE  =========================== -<

