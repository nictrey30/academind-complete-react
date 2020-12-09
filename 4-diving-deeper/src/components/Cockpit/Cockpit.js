import React from 'react';
import ParagraphLength from '../ParagraphLength';

const Cockpit = ({ assignedClasses, btnClass, handleTogglePersons }) => (
  <>
    <h1>HI, I'm a React App</h1>
    {/* setting the class of this p tag dinamically based upon the length of the persons */}
    <p className={assignedClasses}>This is really working</p>
    <div>
      <ParagraphLength />
    </div>
    <button className={btnClass} onClick={handleTogglePersons}>
      Toggle Persons
    </button>
  </>
);

export default Cockpit;
