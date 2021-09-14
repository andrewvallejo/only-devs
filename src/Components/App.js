/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './Header.js';
import { Question } from './Question';
import { QuestionBoard } from './QuestionBoard';
import { fetchQuestions, uploadAnswer, postAnswerRating } from '../utility/apiCalls';
import { DevContext } from '../utility/DevContext.js';
import { reducer } from '../utility/reducer.js';

const initialState = {
  question: [],
  questions: [],
  error: '',
  postError: '',
  isLoaded: false
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    (async () => {
      !state.questions.length &&
        await fetchQuestions().then(data => {
          dispatch({ state, action: { type: 'SETQUESTIONS', value: data } })
          dispatch({ state, action: { type: 'SETQUESTION', value: randomize(data) } })
        })
    })()
  }, [])

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

  const randomize = (items) => {
    return items[Math.floor(Math.random() * items.length)]
  }

  const rateAnswer = (answer) => {
    postAnswerRating(answer)
      .then(response => { console.log(response) })
  }

  return (
    <DevContext.Provider value={{ state, dispatch }}>
      <Switch>
        <Route exact path='/'>
          <Header />
          <main>
            <Question question={state.question} postAnswer={postAnswer} />
            <QuestionBoard vote={rateAnswer} questions={state.questions} />
          </main>
        </Route>
      </Switch>
    </DevContext.Provider>
  )
};

          // <Route exact path='/question-details/:id'>
          //   <QuestionDetails
          //       key={questionID}
          //       id={questionID}
          //       questions={state.questions}
          //       rateAnswer={rateAnswer} /> 
          // </Route>