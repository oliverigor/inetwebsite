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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Navbar/>
        </header>

      <section className="section">
        <ShopArea/>
      </section>


      </div>
    );
  }
}

export default App;
