import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    {/* we can omit the true if we pass only boolean props */}
    <NavigationItem link='/' active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
