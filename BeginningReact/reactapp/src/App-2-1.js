import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products'

class App extends Component {
  render() {
    return (
      <div>
          <h1>ReactApp</h1>
          <Products />
      </div>
    );
  }
}

export default App;
