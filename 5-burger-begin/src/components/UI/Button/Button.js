import React from 'react';
import classes from './Button.module.css';
const button = (props) => (
  // adding multiple classes to the button with css modules
  // btnType is a type set from outside and it can be either Danger or Success
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
