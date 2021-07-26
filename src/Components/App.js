import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Question from './Question';
import QuestionBoard from './QuestionBoard';
import { fetchQuestions } from '../Utlities/apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetchQuestions()
      .then(data => this.setState({ questions: data.questions }))
      .catch(error => this.setState({error: 'Oops server is down! Please Refresh the page'}))
  }

  render() {
    return (
      <>
        <Header />
        <main>
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
        </main>
      </>
    )
  }
}

export default App;