// display a preview of our burger and show the continue and cancel buttons
import React from 'react';
import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.ChecoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType='Danger' clicked>
        Cancel
      </Button>
      <Button btnType='Success' clicked>
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummary;
