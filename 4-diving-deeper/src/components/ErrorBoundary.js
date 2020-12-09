import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  };

  // method that receives a potential error and some aditionall info passed automatically by React
  // componentDidCatch will execute whenever a component we wrap with the ErrorBoundary throws an error
  componentDidCatch = (err, info) => {
    this.setState({ hasError: true, errorMessage: err });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
