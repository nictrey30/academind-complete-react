import React from 'react';
import '../css/Person.css';

const Person = (props) => {
  return (
    <div className='Person'>
      <p>
        I'm {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      {/* the event will be passed automaticall by React to the handleNameChanged function */}
      <input
        type='text'
        defaultValue={props.name}
        onChange={(e) => props.handleNameChanged(e, props.index)}
      />
    </div>
  );
};

export default Person;
