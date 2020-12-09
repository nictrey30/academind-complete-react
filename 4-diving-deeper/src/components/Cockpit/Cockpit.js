import React from 'react';
import classes from '../../containers/App.module.css';
import ParagraphLength from '../ParagraphLength';

const Cockpit = ({ handleTogglePersons, persons, btnClass }) => {
  const assignedClasses = [];
  if (persons.length <= 2) assignedClasses.push(classes.red); // "App_red__ai-vW"
  if (persons.length <= 1) assignedClasses.push(classes.bold); // "App_bold__Gusdv"
  return (
    <>
      <h1>HI, I'm a React App</h1>
      {/* setting the class of this p tag dinamically based upon the length of the persons */}
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <div>
        <ParagraphLength />
      </div>
      <button className={btnClass} onClick={handleTogglePersons}>
        Toggle Persons
      </button>
    </>
  );
};
export default Cockpit;
