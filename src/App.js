import React, { useEffect, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { QuestionPage } from './pages/QuestionPage'
import { getQuestions } from './utility/apiCalls'
import { DevContext } from './utility/DevContext'
import { reducer } from './utility/reducer'
import { randomize } from './utility/util'

const initialState = {
  questions: [],
  randomQuestion: [],
  selectedQuestion: [],
  answers: [],
  error: '',
  isLoaded: false
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    ;(async () =>
      !state.questions.length &&
      (await getQuestions().then((data) => {
        dispatch({ state, action: { type: 'SETQUESTIONS', value: data } })
        dispatch({
          state,
          action: { type: 'SETRANDOMQUESTION', value: randomize(data) }
        })
      })))()
  }, [dispatch, state])

  return (
    <DevContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions/*" element={<QuestionPage />} />
      </Routes>
    </DevContext.Provider>
  )
}
