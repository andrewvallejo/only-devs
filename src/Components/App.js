import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Question from './Question'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <main>
        <Header />
        <section>
        <Route exact path = '/' render={() => 
          <Question />
          }/>
        </section>
      </main>
    )
  }
}

export default App;