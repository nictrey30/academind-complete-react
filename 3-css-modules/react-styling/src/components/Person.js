import React from 'react';
import classes from '../css/Person.module.css';

const Person = ({
  person,
  handleNameChanged,
  handleDeletePerson,
  children
}) => {
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
