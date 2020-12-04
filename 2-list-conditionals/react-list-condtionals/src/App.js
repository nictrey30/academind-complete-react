import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import ParagraphLength from './components/ParagraphLength';
import { v1 as uuidv1 } from 'uuid';
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

    return (
      <div className='App'>
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (- ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (- CharComponent) and style it as an inline
            box (- display: inline-block, padding: 16px, text-align: center,
            margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
          <div>
            <ParagraphLength />
          </div>
        </ol>
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
