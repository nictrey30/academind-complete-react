import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import { v1 as uuidv1 } from 'uuid';

class App extends Component {
  state = {
    persons: [
      {
        id: uuidv1(),
        name: 'Max',
        age: 28
      },
      {
        id: uuidv1(),
        name: 'Manu',
        age: 29
      },
      {
        id: uuidv1(),
        name: 'Stephanie',
        age: 26
      }
    ],
    togglePersons: true
  };

  handleNameChanged = (e, id) => {
    this.setState({
      persons: this.state.persons.map((person) => {
        if (person.id === id) {
          return { ...person, name: e.target.value };
        }
        return person;
      })
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
    // console.log(this.state.togglePersons);
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid grey',
      outline: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.togglePersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                person={person}
                handleNameChanged={this.handleNameChanged}
                handleDeletePerson={this.handleDeletePerson}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>A second paragraph</p>
        {/* <button onClick={this.handleSwitchNames.bind(this, 'Ion')}> */}
        <button style={buttonStyle} onClick={this.handleTogglePersons}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
