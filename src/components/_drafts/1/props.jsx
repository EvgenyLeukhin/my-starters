// FBC
import React from 'react';
const FBC = props => {
  const { title, description } = props;
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <p>{description}</p>
    </React.Fragment>
  );
};
export default FBC;

// CBC
import React from 'react';
export default class CBC extends React.Component {
  render() {
    const { title, description } = this.props;
    return (
      <React.Fragment>
        <h2>{title}</h2>
        <p>{description}</p>
      </React.Fragment>
    );
  }
}

// ============================================================= //
import React from 'react';
import FBC from './FBC';
import CBC from './CBC';

export default class ReactClassComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FBC title="Title1" discription="Something1" />
        <FBC title="Title2" discription="Something2" />
        <СBC title="Title3" discription="Something3" />
        <СBC title="Title4" discription="Something4" />
      </React.Fragment>
    );
  }
}
