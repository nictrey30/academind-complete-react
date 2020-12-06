import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import ParagraphLength from './components/ParagraphLength';
import { v1 as uuidv1 } from 'uuid';
import styled from 'styled-components';

const personAge = () => Math.floor(Math.random() * 100 + 18);

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? 'red' : 'green')};
  color: white;
  font: inherit;
  border: 1px solid grey;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
    color: black;
  }
`;

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
    }

    const classes = [];
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');

    return (
      <div className='App'>
        {/* setting the class of this p tag dinamically based upon the length of the persons */}
        <p className={classes.join(' ')}>This is really working</p>
        <div>
          <ParagraphLength />
        </div>
        {/* <button onClick={this.handleSwitchNames.bind(this, 'Ion')}> */}
        {/* we want to change some styles based upon some circumstance outside the component, in this case -- based on togglePersons. We can pass a prop(alt) with the value of this.state.togglePersons */}
        <StyledButton
          onClick={this.handleTogglePersons}
          alt={this.state.togglePersons ? 1 : 0}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
