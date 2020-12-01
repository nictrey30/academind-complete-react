import React from 'react';
import '../css/Person.css';

const Person = (props) => {
  return (
    <div className='Person'>
      <p
        // pass method to the state that change the state of the parent component
        onClick={() => {
          props.handleSwitchNames('Ana-Maria');
        }}
      >
        I'm {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      {/* the event will be passed automaticall by React to the handleNameChanged function */}
      <input
        type='text'
        defaultValue={props.name}
        onChange={props.handleNameChanged}
      />
    </div>
  );
};

export default Person;
