/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { QuestionPage } from '../pages/QuestionPage';
import { getQuestions } from '../utility/apiCalls';
import { DevContext } from '../utility/DevContext';
import { reducer } from '../utility/reducer';
import { randomize } from '../utility/util';

const initialState = {
  randomQuestion: [],
  selectedQuestion: [],
  answers: [],
  questions: [],
  error: '',
  postError: '',
  isLoaded: false
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    (async () => !state.questions.length &&
      await getQuestions().then(data => {
        dispatch({ state, action: { type: 'SETQUESTIONS', value: data } })
        dispatch({ state, action: { type: 'SETRANDOMQUESTION', value: randomize(data) } })
      })
    )()
  }, [])


  return (
    <DevContext.Provider value={{ state, dispatch }}>
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/questions/:id' component={QuestionPage} />
        </Switch>
      </main>
    </DevContext.Provider>
  )
};