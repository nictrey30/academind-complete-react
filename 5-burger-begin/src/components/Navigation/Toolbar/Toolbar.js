import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    {/* to override the Logo height, we wrap it in a div that we give the class Logo from the Toolbar component that takes its height from the module.css file associated with it */}
    <div className={classes.Logo}>
      <Logo />
    </div>
    {/* hide the nav in mobile view */}
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
