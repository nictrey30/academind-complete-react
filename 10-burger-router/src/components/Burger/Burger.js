import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  console.log(props);
  // we are receiving the ingredients from props as an object, so we have to transform it into an array of the values of the ingredients
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      // return an array with as many elements as we have ingredients for a given ingredient
      return [...Array(props.ingredients[igKey])].map((blank, index) => {
        return <BurgerIngredient key={igKey + index} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default withRouter(burger);
