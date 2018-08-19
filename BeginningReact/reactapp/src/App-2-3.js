import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products'

class App extends Component

  formatName(user){
    return user.firstName+' '+user.lastName;
  }

  render() {
    return (
      const user = {
        firstName:'Greg',
        lastName: 'Lim'
      };
      <div>
          <h1>Hello, {this.formatName(user)}
          </h1>

      </div>
    );
  }
}

export default App;
