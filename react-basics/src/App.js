import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Saurabh', age: '29', title: 'Software Engineer'},
      {name: 'Ripinka', age: '27'}
    ]
  }

  nameChangeHandler = (lastName) => {
    this.setState({
      persons: [
        {name: 'Saurabh ' + lastName, age: '29', title: 'Software Engineer'},
        {name: 'Ripinka ' + lastName, age: '27'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            React Tutorial
          </p>
          <button className="App-btn" onClick={this.nameChangeHandler.bind(this, 'Patil')}>Show FullName</button>
          {this.state.persons.map(person => (
            <Person name={person.name} age={person.age}>{person.title ? 'Job Title: ' + person.title : ''}</Person>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
