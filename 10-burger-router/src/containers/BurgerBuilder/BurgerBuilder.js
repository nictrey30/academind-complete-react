import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';

// mapping of each ingredient costs what
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    // true once at least one ingredient is 1 or more
    purchasable: false,
    purchasing: false,
    // when is true show Spinner, when is false show OrderSummary
    loading: false,
    error: false
  };

  componentDidMount() {
    // console.log(this.props);
    axios
      .get('/ingredients.json')
      .then((response) => this.setState({ ingredients: response.data }))
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
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

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  // purchaseContinueHandler = () => {
  //   // alert('You continue!');
  //   // the request is about to get sent
  //   this.setState({ loading: true });
  //   // send the order to the database -> the endpoint is: node name + .json
  //   const order = {
  //     ingredients: this.state.ingredients,
  //     // for production calculate the totalPrice on the server!, to make sure that the user isn't manipulating the code before sending it
  //     price: this.state.totalPrice,
  //     customer: {
  //       name: 'Max B.',
  //       address: {
  //         street: 'Test street 1',
  //         zipCode: '342000',
  //         country: 'England'
  //       },
  //       email: 'test@test.com'
  //     },
  //     deliveryMethod: 'fastest'
  //   };
  //   axios
  //     .post('/orders.json', order)
  //     .then((response) => {
  //       // stop loading no matter what the response is, because the request is done even if it failed
  //       // Modal is only shown if the state.purchasing property is true, so we set it to false to close the modal
  //       this.setState({ loading: false, purchasing: false });
  //     })
  //     .catch((error) => {
  //       // even if an error has occured we want to stop loading
  //       this.setState({ loading: false, purchasing: false });
  //     });
  // };

  // purchaseContinueHandler with Router
  purchaseContinueHandler = () => {
    // pass the ingredients to Checkout component with Router
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    // passing also the totalPrice with queryParams
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      // {salad: true, meat: false, ...}
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    // Burger and BuildControls depend of this.state.ingredients, but that is retrieved withasync axios, so until they come back i want to display a Spinner
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }
    // override orderSummary if this.state.loading was set
    if (this.state.loading) orderSummary = <Spinner />;
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
