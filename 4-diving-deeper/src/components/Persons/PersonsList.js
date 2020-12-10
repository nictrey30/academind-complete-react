import React, { Component } from 'react';
import Person from './Person';
import ErrorBoundary from '../ErrorBoundary';

class PersonsList extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[PersonsList.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[PersonsList.js] shouldComponentUpdate');
  // we have to return true or false
  //   return true;
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
