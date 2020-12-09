import React from 'react';
import classes from './Person.module.css';

const Person = ({
  person,
  handleNameChanged,
  handleDeletePerson,
  children
}) => {
  // test for ErrorBoundary
  // const rnd = Math.random();
  // if (rnd > 0.7) {
  //   throw new Error('Something went wrong!');
  // }

  return (
    <div className={classes.Person}>
      <p onClick={() => handleDeletePerson(person.id)}>
        I'm {person.name} and I am {person.age} years old.
      </p>
      <p>{children}</p>
      <input
        type='text'
        defaultValue={person.name}
        onChange={(e) => handleNameChanged(e, person.id)}
      />
    </div>
  );
};

export default Person;
