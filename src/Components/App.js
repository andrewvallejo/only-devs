import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Question from './Question'
import QuestionBoard from './QuestionBoard'

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
        {/* <QuestionBoard /> this will be in place of lines 18-20 and will hold all of our view options based on the route path */}
        </section>
      </main>
    )
  }
}

export default App;