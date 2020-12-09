import React from 'react';
import Person from './Person';
import ErrorBoundary from '../ErrorBoundary';

const PersonsList = ({ persons, handleNameChanged, handleDeletePerson }) => {
  console.log('[PersonsList.js] rendering...');
  return persons.map((person) => (
    <div key={person.id}>
      <ErrorBoundary>
        <Person
          person={person}
          handleNameChanged={handleNameChanged}
          handleDeletePerson={handleDeletePerson}
        />
      </ErrorBoundary>
    </div>
  ));
};

export default PersonsList;
