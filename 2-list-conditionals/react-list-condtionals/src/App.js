import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import ParagraphLength from './components/ParagraphLength';
import { v1 as uuidv1 } from 'uuid';
import Radium, { StyleRoot } from 'radium';

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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid grey',
      outline: 'none',
      borderRadius: '5px',
      padding: '5px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    // if this condition is true => persons can be seen
    if (this.state.togglePersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
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
      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] = {
        backgroundColor: '#ffcccb',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');

    return (
      <StyleRoot>
        <div className='App'>
          {/* setting the class of this p tag dinamically based upon the length of the persons */}
          <p className={classes.join(' ')}>This is really working</p>
          <div>
            <ParagraphLength />
          </div>
          {/* <button onClick={this.handleSwitchNames.bind(this, 'Ion')}> */}
          <button style={buttonStyle} onClick={this.handleTogglePersons}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
