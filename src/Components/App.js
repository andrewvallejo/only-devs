import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import QuestionBoard from './QuestionBoard';
import { fetchQuestions } from '../Utilities/apiCalls';

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
      .catch(error => this.setState({error: 'Oops server is down! Please try again.'}))
  }

  render() {  
    return (
      <>
        <Header />
        <main>
          <Switch>
            {this.state.error && <h3 className='errorLoading'>{this.state.error}</h3>}
            {!this.state.questions.length && !this.state.error && <h3>Loading...</h3>}
            <Route exact path = '/' render={() => 
              <QuestionBoard questions={this.state.questions} />
            } />
            <Route exact path = '/all-questions' render={() => 
              <QuestionBoard questions={this.state.questions} /> 
            } />
            {/* For QuestionDetails, it would be the individual question and all of its answers right?
            <Route exact path = '/all-questions/:id' render={() => 
              <QuestionDetails questions={this.state.questions}/>
            } />
             */}
          </Switch>
        </main>
      </>
    )
  }
}

export default App;