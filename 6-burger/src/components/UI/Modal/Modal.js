import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  // controlling the update of OrderSummary by controlling the way Modal renders
  shouldComponentUpdate(nextProps, nextState) {
    // check only if the 'show' prop changes
    return nextProps.show !== this.props.show;
  }
  render() {
    return (
      <Aux>
        {/* if the Modal is shown, the backdrop should be shown */}
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
