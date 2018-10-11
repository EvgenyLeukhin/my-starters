import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import cx from 'classnames';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      hightlight: false,
    };
    this.hightlightToggle = () => {
      this.setState({hightlight: !this.state.hightlight});
    };
  }
  render() {
    const { hightlight } = this.state;
    return(
      <React.Fragment>
        <button className={cx('btn', {'hightlight': hightlight })}
          onClick={this.hightlightToggle}
        >{!hightlight ? 'Click me' : 'Clicked'}</button>
      </React.Fragment>
    );
  }
}
