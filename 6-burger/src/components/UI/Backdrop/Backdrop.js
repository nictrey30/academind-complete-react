import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) =>
  // needs to be true to display the backdrop
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
