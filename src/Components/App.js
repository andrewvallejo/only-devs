import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from ../Header;

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <nav>
        <Header />
      </nav>
    )
  }
}

export default App;