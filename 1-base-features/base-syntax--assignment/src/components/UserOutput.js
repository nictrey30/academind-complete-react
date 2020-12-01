import React from 'react';
import '../css/UserOutput.css';

function UserOutput({ username }) {
  return (
    <div className='UserOutput'>
      <p>
        Hey {username}, Lorem ipsum dolor sit amet, consectetur adipisicing?
      </p>
      <p>Ma duc la piata sa cumpar mere si pere, zise {username}.</p>
      <hr style={{ width: '90%', marginBottom: '25px' }} />
    </div>
  );
}

export default UserOutput;
