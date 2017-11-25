import React, { Component } from 'react';
import logo from './logo.svg';
import vt_logo from './virginia_tech_football.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href="https://sfortson.github.io/react-repo" className="App-title">Home</a>
        </header>
        <p className="App-intro">
          <img src={vt_logo} />
        </p>
      </div>
    );
  }
}

export default App;
