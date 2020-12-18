import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Person.module.css';
import withClassFunctional from '../../hoc/withClassFunctional';
import PropTypes from 'prop-types';

class Person extends Component {
  render() {
    console.log('[Person] rendering...');
    return (
      // <div className={classes.Person}>
      // </div>
      <Aux>
        <p onClick={() => this.props.handleDeletePerson(this.props.person.id)}>
          I'm {this.props.person.name} and I am {this.props.person.age} years
          old.
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          defaultValue={this.props.person.name}
          onChange={(e) =>
            this.props.handleNameChanged(e, this.props.person.id)
          }
        />
      </Aux>
    );
  }
}

// propTypes is a special property that you can add to any js component object that react will watchout for in dev mode and give you a awarning if you pass incorect props
// what props this component uses and which type they should be
// key-value pairs, where the keys are the prop names, and the values their types
Person.propTypes = {
  handleDeletePerson: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  handleNameChanged: PropTypes.func
};

export default withClassFunctional(Person, classes.Person);
