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
    totalPrice: 4,
    // becomes true one we can buy the burger
    purchasable: false
  };
  updatePurchaseState = (ingredients) => {
    // create an array of string entries from the ingredients object, and then map it to the value of those ingredients to calculate the sum(quantity) of all ingredients. After that reduce it to the sum of all those values
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    // the burger is purchasable if we have at least one ingredient
    this.setState({ purchasable: sum > 0 });
  };
  addIngredientHandler = (type) => {
    // this.setState((prevState) => {
    //   return {
    //     ingredients: {
    //       ...this.state.ingredients,
    //       [type]: prevState.ingredients[type] + 1
    //     },
    //     totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
    //   };
    // });
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredientHandler = (type) => {
    // this.setState((prevState) => {
    //   return {
    //     ingredients: {
    //       ...this.state.ingredients,
    //       [type]:
    //         prevState.ingredients[type] === 0
    //           ? 0
    //           : prevState.ingredients[type] - 1
    //     },
    //     totalPrice:
    //       prevState.ingredients[type] > 0
    //         ? prevState.totalPrice - INGREDIENT_PRICES[type]
    //         : prevState.totalPrice
    //   };
    // });
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
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
          purchasable={this.state.purchasable}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}
