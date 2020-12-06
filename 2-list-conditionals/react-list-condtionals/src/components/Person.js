import React from 'react';
import '../css/Person.css';
import Radium from 'radium';

const Person = ({
  person,
  handleNameChanged,
  handleDeletePerson,
  children
}) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <div className='Person' style={style}>
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

export default Radium(Person);
