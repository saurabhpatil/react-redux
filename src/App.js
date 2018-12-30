import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Saurabh', age='29'},
      {name: 'Ripinka', age='27'}
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            React Tutorial
          </p>
          <Person name='Saurabh' age='29'>Job Title: Software Engineer</Person>
          <Person name='Ripinka' age='27'></Person>
        </header>
      </div>
    );
  }
}

export default App;
