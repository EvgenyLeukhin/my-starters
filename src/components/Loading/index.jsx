import React from 'react';
import FontAwesome from 'react-fontawesome';
import './style.scss';

const Loading = ({ isLoading, pastDelay, error }) => {
  if (isLoading && pastDelay) {
    return (
      <div className="preloader-wraper">
        <FontAwesome name='spinner' spin={true} size='3x' style={{ color: '#000' }} />
      </div>
    );
  } else if (error && !isLoading) {
    return <p>Error!</p>;
  } else {
    return null;
  }
};

export default Loading;
