import React, { useEffect, useReducer } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Header } from './Header.js';
import { Question } from './Question';
import { QuestionBoard } from './QuestionBoard';
import { QuestionDetails } from './QuestionDetails';
import { fetchQuestions, uploadAnswer, postAnswerRating } from '../utility/apiCalls';
import PropTypes from 'prop-types';
import { DevContext } from '../utility/DevContext.js';
import { reducer } from '../utility/reducer.js';


const initialState = {
  randomQuestion: {},
  questions: [],
  error: '',
  postError: '',
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  let randomizeQuestion;

  randomizeQuestion = () => {
    const randomQuestion = state.questions[Math.floor(Math.random() * state.questions.length)]
    dispatch({ randomQuestion });
  };

  useEffect(() => {
    fetchQuestions()
      .then(data => {
        dispatch({ questions: data })
        randomizeQuestion()
        
      })
      .catch(error => dispatch({ error: 'Oops server is down! Please try again later.' }))
  }, [randomizeQuestion])

  const postAnswer = (newAnswer) => {
    uploadAnswer(newAnswer)
      .then(response => {
        if (!response) {
          dispatch({ error: 'Oops,  our server is down! Your wasn\'t posted. Please try again later.' })
          throw Error('Error fetching answers')
        }
        return response.json()
      })
      .catch(error => console.error(error))
  }

  const rateAnswer = (answer) => {
    postAnswerRating(answer)
      .then(response => {
        console.log(response)
      })
  }

  return (
    <DevContext.Provider value={(state, dispatch)}>
      <Switch>
        <Header />
        <main>
          {state.error && <h3 className='errorLoading'>{state.error}</h3>}
          {(!state.questions.length && !state.error) && <h3>Loading...</h3>}
          <Route exact path='/' render={() =>
            <>
              <Question
                randomQuestion={state.randomQuestion}
                postAnswer={postAnswer} />
              <QuestionBoard
                questions={state.questions}
                vote={rateAnswer} />
            </>
          } />
          <Route exact path='/question-details/:id' render={({ match }) => {
            const questionID = parseInt(match.params.id);
            return (
              <QuestionDetails
                key={questionID}
                id={questionID}
                questions={state.questions}
                rateAnswer={rateAnswer} />
            )
          }} />
          <Route>
            <Link to='/'>
              <h3>Sorry we can't find that page, click here to go home!</h3>
            </Link>
          </Route>
        </main>
      </Switch>
    </DevContext.Provider>
  );
}

App.propTypes = {
  randomQuestion: PropTypes.object,
  questions: PropTypes.array,
  error: PropTypes.string
}
