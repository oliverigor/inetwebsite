import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar.js';
import './App.css';
import ShopArea from './components/shoparea.js';
import InetLogo from './inet-logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
          <Navbar/>
          <img src={InetLogo}/>
          
        </header>

      <section className="section">
        <ShopArea/>
      </section>


      </div>
    );
  }
}

export default App;
