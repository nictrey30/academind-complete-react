import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age: 29
      },
      {
        name: 'Stephanie',
        age: 26
      }
    ],
    togglePersons: true
  };

  handleNameChanged = (e, index) => {
    console.log(e.target.value, index);
  };
  // toggle some property that decide either we display the div with Persons or not
  handleTogglePersons = () => {
    this.setState({ togglePersons: !this.state.togglePersons });
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
                key={index}
                index={index}
                name={person.name}
                age={person.age}
                handleNameChanged={this.handleNameChanged}
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
