import React, { useContext, useEffect } from 'react';

import { QuestionBoard } from '../components/QuestionBoard';
import { QuestionForm } from '../components/QuestionForm';
import { getQuestions } from '../utility/apiCalls';
import { DevContext } from '../utility/DevContext';
import { randomize } from '../utility/util';
import { NavBar } from './NavBar';

export const HomePage = () => {
  const { state, dispatch } = useContext(DevContext);

  useEffect(() => {
    (async () => !state.questions.length &&
      await getQuestions().then(data => {
        dispatch({ state, action: { type: 'SETQUESTIONS', value: data } });
        dispatch({ state, action: { type: 'SETRANDOMQUESTION', value: randomize(data) } });
      })
    )();
  }, [dispatch, state]);

  return (
    <main>
      <NavBar />
      <QuestionForm question={state.randomQuestion} />
      <QuestionBoard state={state} dispatch={dispatch} />
    </main>
  );
};
 