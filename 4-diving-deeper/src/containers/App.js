import React, { Component } from 'react';
// CSS Modules - import the styles in the css file as properties on the 'classes' object
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import PersonsList from '../components/Persons/PersonsList';
import { v1 as uuidv1 } from 'uuid';

const personAge = () => Math.floor(Math.random() * 100 + 18);

class App extends Component {
  constructor(props) {
    // execute the constructor of the Component
    super(props);
    console.log('[App.js] constructor');
  }

  // class field declaration
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

  // after the constructor, getDerivedStateFromProps runs. It syncs the local state with the props we are getting
  static getDerivedStateFromProps(props, state) {
    console.log(`[App.js] getDerivedStateFromProps, ${props}`);
    // should return updated state
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

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
    console.log('[App.js] render');
    let persons = null;

    // if this condition is true => persons can be seen
    if (this.state.togglePersons) {
      persons = (
        <PersonsList
          persons={this.state.persons}
          handleNameChanged={this.handleNameChanged}
          handleDeletePerson={this.handleDeletePerson}
        />
      );
    }

    return (
      <div className={classes.App}>
        {/* forward the props received by App to Cockpit */}
        <Cockpit
          title={this.props.appTitle}
          handleTogglePersons={this.handleTogglePersons}
          persons={this.state.persons}
          showPersons={this.state.togglePersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
