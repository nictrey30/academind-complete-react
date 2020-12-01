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
    otherState: 'some other value'
  };

  handleSwitchNames = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
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
      ]
    });
  };

  handleNameChanged = (e) => {
    this.setState({
      persons: this.state.persons.map((person, index) =>
        index === 0
          ? {
              name: e.target.value,
              age: person.age
            }
          : person
      )
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid grey',
      outline: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    };
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>A second paragraph</p>
        {/* <button onClick={this.handleSwitchNames.bind(this, 'Ion')}> */}
        <button
          style={buttonStyle}
          onClick={() => this.handleSwitchNames('Ion')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          handleSwitchNames={this.handleSwitchNames}
          handleNameChanged={this.handleNameChanged}
        >
          My hobbies: racing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          handleSwitchNames={this.handleSwitchNames}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          handleSwitchNames={this.handleSwitchNames}
        />
      </div>
    );
  }
}

export default App;
