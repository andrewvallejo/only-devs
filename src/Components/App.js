/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { QuestionPage } from '../pages/QuestionPage';
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

// <Route exact path='/question-details/:id'>
//   <QuestionDetails
//       key={questionID}
//       id={questionID}
//       questions={state.questions}
//       rateAnswer={rateAnswer} /> 
// </Route>

// const postAnswer = (newAnswer) => {
//   uploadAnswer(newAnswer)
//     .then(response => {
//       if (!response) {
//         dispatch({ error: 'Oops,  our server is down! Your wasn\'t posted. Please try again later.' })
//         throw Error('Error fetching answers')
//       }
//       return response.json()
//     })
//     .catch(error => console.error(error))
// }

// const rateAnswer = (answer) => {
//   postAnswerRating(answer)
//     .then(response => { console.log(response) })
// }