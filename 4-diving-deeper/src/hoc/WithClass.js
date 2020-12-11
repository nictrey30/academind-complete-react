import React from 'react';

// returns a React component
const WithClass = (props) => (
  <div className={props.classes}>{props.children}</div>
);

export default WithClass;
