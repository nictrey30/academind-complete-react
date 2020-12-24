import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// map prices for each ingredient
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    // base price of the burger, without any ingredients
    totalPrice: 4
  };
  addIngredientHandler = (type) => {
    this.setState((prevState) => {
      return {
        ingredients: {
          ...this.state.ingredients,
          [type]: prevState.ingredients[type] + 1
        },
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
      };
    });
  };
  removeIngredientHandler = (type) => {
    this.setState((prevState) => {
      return {
        ingredients: {
          ...this.state.ingredients,
          [type]:
            prevState.ingredients[type] === 0
              ? 0
              : prevState.ingredients[type] - 1
        },
        totalPrice:
          prevState.ingredients[type] > 0
            ? prevState.totalPrice - INGREDIENT_PRICES[type]
            : prevState.totalPrice
      };
    });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    console.log(this.state.totalPrice);
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}
