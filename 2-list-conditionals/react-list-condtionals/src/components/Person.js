import React from 'react';
import '../css/Person.css';

const Person = ({
  person,
  handleNameChanged,
  handleDeletePerson,
  children
}) => {
  return (
    <div className='Person'>
      <p onClick={() => handleDeletePerson(person.id)}>
        I'm {person.name} and I am {person.age} years old.
      </p>
      <p>{children}</p>
      {/* the event will be passed automaticall by React to the handleNameChanged function */}
      <input
        type='text'
        defaultValue={person.name}
        onChange={(e) => handleNameChanged(e, person.id)}
      />
    </div>
  );
};

export default Person;
