/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { QuestionPage } from '../pages/QuestionPage';
import { Header } from '../components/Header'
import { fetchQuestions } from '../utility/apiCalls';
import { DevContext } from '../utility/DevContext';
import { reducer } from '../utility/reducer';
import { randomize } from '../utility/util';

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
    (async () => !state.questions.length &&
      await fetchQuestions().then(data => {
        dispatch({ state, action: { type: 'SETQUESTIONS', value: data } })
        dispatch({ state, action: { type: 'SETQUESTION', value: randomize(data) } })
      })
    )()
  }, [])


  return (
    <DevContext.Provider value={{ state, dispatch }}>
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/question/:id' component={QuestionPage} />
        </Switch>
      </main>
    </DevContext.Provider>
  )
};