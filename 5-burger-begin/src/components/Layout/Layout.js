import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      {/* output the component we wrap with this layout */}
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
