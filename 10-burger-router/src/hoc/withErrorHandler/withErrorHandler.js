import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
      // axios moved here because we execute this code when the component getsuj8  created, before BurgerBuilder being called
      this.responseInterceptor = axios.interceptors.response.use(
        (response) => response,
        (error) => {
          this.setState({ error: error });
        }
      );
      this.requestInterceptor = axios.interceptors.request.use((request) => {
        // clear any error before the request
        this.setState({ error: null });
        return request;
      });
    }

    // componentDidMount is called after all React Child Components have been rendered
    // The componentWillMount() lifecycle hook is primarily used to implement server-side logic before the actual rendering happens, such as making an API call to the server.
    // componetWillMount is called before the child components are rendered
    // UNSAFE_componentWillMount() {
    // axios.interceptors.response.use(
    //   (response) => response,
    //   (error) => {
    //     this.setState({ error: error });
    //   }
    // );
    // axios.interceptors.request.use((request) => {
    //   // clear any error before the request
    //   this.setState({ error: null });
    //   return request;
    // });
    // }

    // remove interceptors
    // componentWillUnmount - executed when a component isn't required anymore, has equivalent the return function in useEffect
    componentWillUnmount() {
      // console.log(
      //   'will unmount',
      //   this.requestInterceptor,
      //   this.responseInterceptor
      // );
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
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
          {/* componentDidMount in the withErrorHandler will only be called once componentDidMount was called in the WrappedComponent, and since we reach out to the web in componentDidMount of the WrappedComponent, we never set up our interceptors*/}
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};
export default withErrorHandler;
