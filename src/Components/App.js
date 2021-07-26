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
        <Switch>
        <Route exact path = '/' render={() => 
          <Question />
        }/>
        <Route exact path = '/all-questions' render={() => 
          <QuestionBoard /> 
        } />
        <Route exact path = '/question-details' render={() => 
          <QuestionDetails />
        } />
        </Switch>
        </section>
      </main>
    )
  }
}

export default App;