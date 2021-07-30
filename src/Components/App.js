import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Question} from './Question';
import { QuestionBoard } from './QuestionBoard';
import { QuestionDetails } from './QuestionDetails';
import { fetchQuestions } from '../Utilities/apiCalls';
import { postAnswer } from '../Utilities/apiCalls';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetchQuestions()
      .then(data => this.setState({ questions: data }))
      .catch(error => this.setState({error: 'Oops server is down! Please try again.'}))
  }

  // getAnswers(id)

  //fetchAnswers based on the id of the Card that is clicked  
  //

  //postAnswer() will be triggered when submit button is clicke... we need to take that question's id
  //and make a POST 

  postAnswer(newAnswer) {
    postAnswer
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
              <Question questions={this.state.questions} add={this.postAnswer} />
            } />
            <Route exact path = '/all-questions' render={() => 
              <QuestionBoard 
                questions={this.state.questions}
              /> 
            } />
            <Route exact path = '/question-details/:id' render={({ match }) => {
              const questionID = parseInt(match.params.id);
              return <QuestionDetails 
                key={questionID}
                id={questionID}
                questions={this.state.questions}/>
            }} />
          </Switch>
        </main>
      </>
    )
  }
}
