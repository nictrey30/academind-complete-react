import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentDidMount() {
      axios.interceptors.response.use(
        (response) => response,
        (error) => {
          this.setState({ error: error });
        }
      );
      axios.interceptors.request.use((request) => {
        // clear any error before the request
        this.setState({ error: null });
        return request;
      });
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          {/* show the Modal only if there aren't any errors */}
          {/* clear the error when clicked */}
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {/* willshow an error if not checking, because the Modal is always present */}
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};
export default withErrorHandler;
