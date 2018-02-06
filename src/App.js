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
          <Navbar/>
          <h1 className="App-title">iNet Informática</h1>
          
        </header>

      <section className="section">
        <ShopArea/>
      </section>


      </div>
    );
  }
}

export default App;
