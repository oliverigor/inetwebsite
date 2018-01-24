import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar.js';
import './App.css';
import ShopArea from './components/shoparea.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">igor Lindo </h1>
        </header>
        <p className="App-intro">
          To get started, edit and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
