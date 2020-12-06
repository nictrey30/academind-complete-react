import React from 'react';
import styled from 'styled-components';
// import '../css/Person.css';

// every method provided by this 'styled' object returns a React component
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  margin-bottom: 20px;
  text-align: center;

  p:hover {
    text-decoration: line-through;
  }

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Person = ({
  person,
  handleNameChanged,
  handleDeletePerson,
  children
}) => {
  return (
    // <div className='Person' style={style}>
    <StyledDiv>
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
    </StyledDiv>
  );
};

export default Person;
