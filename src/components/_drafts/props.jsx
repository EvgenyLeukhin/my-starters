// props in rfc
import React from 'react'
import propTypes from 'prop-types'
const Some1 = props => {
  const {name, age} = props;
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}
//
Some1.defaultProps = {
  name: 'Your name',
  age: 00,
};
Some1.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number,
}
export default Some;
{/* <Some name='John' age='32'> */}



// props in rcc
import React from 'react'
import PropTypes from 'prop-types'

class Some2 extends React.Component {
  // можно вставлять сюда или как в примере выше
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  render() {
    const {name, age} = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}
export default Some;
{/* <Some name='John' age='32'> */ }
