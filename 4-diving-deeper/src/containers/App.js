import React, { Component } from 'react';
// CSS Modules - import the styles in the css file as properties on the 'classes' object
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import { v1 as uuidv1 } from 'uuid';
import PersonsList from '../components/Persons/PersonsList';

const personAge = () => Math.floor(Math.random() * 100 + 18);

class App extends Component {
  state = {
    persons: [
      {
        id: uuidv1(),
        name: 'Max',
        age: personAge()
      },
      {
        id: uuidv1(),
        name: 'Manu',
        age: personAge()
      },
      {
        id: uuidv1(),
        name: 'Stephanie',
        age: personAge()
      }
    ],
    togglePersons: true
  };

  handleNameChanged = (e, id) => {
    this.setState({
      persons: this.state.persons.map((person) =>
        person.id === id ? { ...person, name: e.target.value } : person
      )
    });
  };
  // toggle some property that decide either we display the div with Persons or not
  handleTogglePersons = () => {
    // we dont use a new cons called persons and call splice on that, then assign it with this.setState, because that constant still refers to the original state, because in JS arrays and objects are passed by reference and splice modifies the array in-place. Instead we can use spread operator or the slice array method
    this.setState({ togglePersons: !this.state.togglePersons });
  };

  handleDeletePerson = (id) => {
    this.setState({
      persons: [...this.state.persons.filter((person) => person.id !== id)]
    });
  };

  // everyhing inside the render method gets executed whenever React re-renders the component
  render() {
    let persons = null;

    // classes.Button -> a pointer to the unique name generated by Modules
    let btnClass = [classes.Button];

    // if this condition is true => persons can be seen
    if (this.state.togglePersons) {
      persons = (
        <PersonsList
          persons={this.state.persons}
          handleNameChanged={this.handleNameChanged}
          handleDeletePerson={this.handleDeletePerson}
        />
      );
      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) assignedClasses.push(classes.red); // "App_red__ai-vW"
    if (this.state.persons.length <= 1) assignedClasses.push(classes.bold); // "App_bold__Gusdv"

    return (
      <div className={classes.App}>
        <Cockpit
          assignedClasses={assignedClasses.join(' ')}
          btnClass={btnClass.join(' ')}
          handleTogglePersons={this.handleTogglePersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
