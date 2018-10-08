// FBC
import React from 'react';
import PropTypes from 'prop-types';
const FBC = props => {
  const { title, description } = props;
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <p>{description}</p>
    </React.Fragment>
  );
};
FBC.defaultProps = {
  title: 'Title',
  description: 'Description',
}
FBC.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
export default FBC;




import React from 'react';
export default class CBC extends React.Component {
  // PropTypes variant
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }
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
