// Styling aproaches
// 1. Bundle.css - all css in one file, global (OLD-school) - one link, cache
// 2. CSS in <style> inside <head> (import to component, no global) - many style tags
// 3. CSS in JS - const style = { ... } + Radium
// 4. CSS-modules (import classes from css-file to component) - unique className

// =========================== ADD CLASSES =========================== ->
import React from 'react';

const someComponent = (props) => {
  return ( <div className="some-class"></div> );
};

export default someComponent;
// =========================== ADD CLASSES =========================== -<





// =========================== INLINE STYLING =========================== ->
import React from 'react';

const style = {
  color: 'white',
  backgroundColor: 'black'
};

const someComponent = (props) => {
  return (<div style={style}></div>);
};

export default someComponent;
// =========================== INLINE STYLING =========================== -<





// =========================== CHANGE INLINE STYLING =========================== ->
class App extends Component {

  contentToogle = () => {
    if (true) {
      style.backgroundColor = 'red';
    }
  }

  render() {
    const style = {
      color: 'white',
      backgroundColor: 'black'
    };

    return (
      <button
        style={style}
        onClick={this.contentToogle}
      >Show content</button>
    );
  }
}
// =========================== CHANGE INLINE STYLING =========================== -<





// =========================== DUNAMIC CLASSES onClick =========================== ->
class App extends Component {

  contentToogle = () => {
    if (true) {
      classes.push('white', 'bold');
    }
  }

  render() {

    const classes = [];

    return (
      <button
        className={classes.join(' ')}
        onClick={this.contentToogle}
      >Show content</button>
    );
  }
}
// =========================== DUNAMIC CLASSES onClick =========================== -<





// =========================== RADIUM =========================== ->
// npm i --save radium
import React from 'react';
import Radium from 'radium';

const style = {
  color: 'maroon',
  textDecoration: 'underline',
  backgroundColor: '#fdf',
  paddingTop: 5,
  paddingBottom: 0,
  ':hover': {
    backgroundColor: 'lightcyan',
    color: 'black'
  },
  '@media (max-width: 500px)': {
    color: 'orange'
  }
};



const someComponent = (props) => {
  return (<div style={style}></div>);
  if (true) {
    style[':hover'] = {
      color: 'black'
    }
  }
};

export default Radium(someComponent);


// in App.jsx
import Radium, { StyleRoot } from 'radium';  // css-lib in jsx
class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="page-wrapper">
          ...
        </div>
      </StyleRoot>
    )
  }
}
export default Radium(App);
// =========================== RADIUM =========================== -<




// =========================== GLAMOR =========================== ->
// npm i --save glamor
import React from 'react';
import { css } from 'glamor';

let someClass1 = css({
  backgroundColor: '#ffd',
  padding: 20,
  border: '1px solid #ccc',
  textAlign: 'center',
  width: '60%',
  margin: '30px auto',
});

let someClass2 = css({
  color: 'maroon',
  ':hover': {
    backgroundColor: 'pink'
  },
  '@media(max-width:500px)': {
    backgroundColor: 'cyan'
  }
});


const glamorComp = (props) => {
  return (
    <div className={`${someClass1} ${someClass2}`}>
      <div className="test">Test content</div>
    </div>
  );
};

export default glamorComp;
// =========================== GLAMOR =========================== -<




// =========================== CSS-MODULES =========================== ->
import React from 'react';

import classes from './../../containers/index.css';


const testComponent = () => {
  return (
    <div>
      <div className={classes.test}>Test content</div>
    </div>
  );
};

export default testComponent;
// =========================== CSS-MODULES =========================== -<
