import React from 'react';

function UserInput({ username, handleUsername }) {
  return (
    <div>
      <label htmlFor='name'>Enter your name: </label>
      <input
        style={{
          border: '1px solid crimson',
          marginBottom: '25px',
          fontSize: '1.25rem',
          padding: '5px 10px',
          borderRadius: '5px'
        }}
        type='text'
        value={username}
        onChange={handleUsername}
        id='name'
      />
    </div>
  );
}

export default UserInput;
