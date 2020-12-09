import React from 'react';
import classes from './Cockpit.module.css';
import ParagraphLength from '../ParagraphLength';

const Cockpit = ({ handleTogglePersons, persons, showPersons, title }) => {
  const assignedClasses = [];
  if (persons.length <= 2) assignedClasses.push(classes.red); // "Cockpit_red__ai-vW"
  if (persons.length <= 1) assignedClasses.push(classes.bold); // "Cockpit_bold__Gusdv"

  let btnClass = showPersons ? classes.Red : '';

  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      {/* setting the class of this p tag dinamically based upon the length of the persons */}
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <div>
        <ParagraphLength />
      </div>
      <button className={btnClass} onClick={handleTogglePersons}>
        Toggle Persons
      </button>
    </div>
  );
};
export default Cockpit;
