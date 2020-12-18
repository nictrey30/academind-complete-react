import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import ParagraphLength from '../ParagraphLength';
import AuthContext from '../../contexts/auth-context';

const Cockpit = ({
  login,
  handleTogglePersons,
  personsLength,
  showPersons,
  title
}) => {
  // get the context into the const
  const authContext = useContext(AuthContext);
  // create a refference
  const toggleBtnRef = useRef();
  // useEffect runs after every render cycle
  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // http request...
    const timer = setTimeout(() => {
      alert('saved data to cloud!');
    }, 1000);
    // cleanup - the returned anonymous function runs BEFORE the main useEffect runs, but AFTER the (first) render cycle
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work');
    };
  }, []);

  useEffect(() => {
    console.log('Cockpit.js] 2nd useEffect');
  });

  const assignedClasses = [];
  if (personsLength <= 2) assignedClasses.push(classes.red); // "Cockpit_red__ai-vW"
  if (personsLength <= 1) assignedClasses.push(classes.bold); // "Cockpit_bold__Gusdv"

  let btnClass = showPersons ? classes.Red : '';

  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      {/* setting the class of this p tag dinamically based upon the length of the persons */}
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <div>
        <ParagraphLength />
      </div>
      <button
        className={btnClass}
        onClick={handleTogglePersons}
        ref={toggleBtnRef}
      >
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

// The best case of wrapping a component in React.memo() is when you expect the functional component to render often and usually with the same props.

// A common situation that makes a component render with the same props is being forced to render by a parent component.
export default React.memo(Cockpit);
