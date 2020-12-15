import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Person.module.css';
import withClassFunctional from '../../hoc/withClassFunctional';

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

export default withClassFunctional(Person, classes.Person);
