// load a component asynchronously
import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      // this component will be set to the dinamically loaded component, implemented in componentDidMount
      component: null
    };

    componentDidMount() {
      // importComponent is a function that will return us a Promise
      importComponent().then((comp) => {
        // comp will have one property "default" -> which will be the component loaded dynamically
        this.setState({ component: comp.default });
      });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
