import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

// array of controls
const controls = [
  {
    label: 'Salad',
    type: 'salad'
  },
  {
    label: 'Bacon',
    type: 'bacon'
  },
  {
    label: 'Cheese',
    type: 'cheese'
  },
  {
    label: 'Meat',
    type: 'meat'
  }
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            ingredientAdded={() => props.addIngredientHandler(control.type)}
            ingredientRemoved={() =>
              props.removeIngredientHandler(control.type)
            }
            disabled={props.disabled[control.type]}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
