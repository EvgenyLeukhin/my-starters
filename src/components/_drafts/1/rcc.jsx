import React from 'react';

export default class ReactClassComponent extends React.Component {
  state = {
    some: true
  }

  classMethod1 = () => { this.setState({some: false}) }
  classMethod2 = () => {}

  render() {
    // js logic
    const { some } = this.state;

    return (
      <div onClick={this.classMethod1}>
        {some ? <p>Something</p> : null}
      </div>
    );
  }
}
