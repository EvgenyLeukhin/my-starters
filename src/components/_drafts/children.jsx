// =========================== CHILDREN  =========================== ->
import React from 'react';

const testComponent = (props) => {
  return (
    <div>
      <mark>{props.children}</mark>
    </div>
  );
};

export default testComponent;

// in App.jsx
<TestComponent>Some children text</TestComponent>;
// =========================== CHILDREN  =========================== -<