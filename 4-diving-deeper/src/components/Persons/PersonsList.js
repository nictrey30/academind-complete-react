import React, { PureComponent } from 'react';
import Person from './Person';
import ErrorBoundary from '../ErrorBoundary';

// PureComponent is a normal Component that already implements shouldComponentUpdate with a complete props check, so it checks for any changes in any prop  of that component
class PersonsList extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[PersonsList.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[PersonsList.js] shouldComponentUpdate');
  //   // we have to return true or false
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.handleNameChanged !== this.props.handleNameChanged ||
  //     nextProps.handledeletePerson !== this.props.handleDeletePerson
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[PersonsList.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // will run once we are done with all the updating
    console.log('[PersonsList.js] componentDidUpdate');
    console.log(snapshot);
  }

  // cleanup work - componentWillUnmount - any code that needs to run right before the component is removed
  componentWillUnmount() {
    console.log('[PersonsList.js] componentWillUnmount');
  }

  render() {
    console.log('[PersonsList.js] rendering...');
    return this.props.persons.map((person) => (
      <div key={person.id}>
        <ErrorBoundary>
          <Person
            person={person}
            handleNameChanged={this.props.handleNameChanged}
            handleDeletePerson={this.props.handleDeletePerson}
          />
        </ErrorBoundary>
      </div>
    ));
  }
}
export default PersonsList;
