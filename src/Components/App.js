import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
// import { Header } from './Header';
import { Question} from './Question';
import { QuestionBoard } from './QuestionBoard';
import { QuestionDetails } from './QuestionDetails';
import { fetchQuestions, uploadAnswer, postAnswerRating } from '../Utilities/apiCalls';
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      randomQuestion: {},
      questions: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetchQuestions()
      .then(data => {
        this.setState({ questions: data })
        this.randomizeQuestion();
        })
      .catch(error => this.setState({error: 'Oops server is down! Please try again.'}))
  }

  randomizeQuestion = () => {
    const randomQuestion = this.state.questions[Math.floor(Math.random() * this.state.questions.length)];  
    this.setState({randomQuestion}); 
  }

  postAnswer(newAnswer) {
    uploadAnswer(newAnswer)
    .then(response => {
      console.log(response)
    });
  }

  rateAnswer(answer) {
    postAnswerRating(answer)
    .then(response => {
      console.log(response)
    });
  }


  render() {  
    return (
      <>
        {/* <Header /> */}
        <NavLink to='/'>
          <img className='logo' src='https://i.imgur.com/imPxyaU.png' alt='only-devs logo' id='onlyDevsLogo'></img>
        </NavLink>
        <main>
          <Switch>
            {this.state.error && <h3 className='errorLoading'>{this.state.error}</h3>}
            {!this.state.questions.length && !this.state.error && <h3>Loading...</h3>}
            < Route exact path = '/' render={() => 
              <>
              <Question 
              randomQuestion={this.state.randomQuestion} 
              postAnswer={this.postAnswer} 

              />
              <QuestionBoard 
                questions={this.state.questions}
                vote={this.rateAnswer}
              /> 
              </>
            } />
            <Route exact path = '/question-details/:id' render={({ match }) => {
              const questionID = parseInt(match.params.id);
              return <QuestionDetails 
                key={questionID}
                id={questionID}
                questions={this.state.questions}
                vote={this.rateAnswer}
                />
            }} />
          </Switch>
        </main>
      </>
    )
  }
}

App.propTypes = {
  randomQuestion: PropTypes.object,
  questions: PropTypes.array,
  error: PropTypes.string
}
