import React from 'react';
import classes from './Modal.module.css';

// modal for showing the order summary
const modal = (props) => {
  return <div className={classes.Modal}>{props.children}</div>;
};

export default modal;
