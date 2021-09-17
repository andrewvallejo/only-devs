import React, { useContext } from 'react';
import { Question } from '../components/Question'
import { DevContext } from '../utility/DevContext';

export const QuestionPage = () => {
  const { state, dispatch } = useContext(DevContext);

  return (
    <>
      <Question state={state} dispatch={dispatch} />
    </>
  )
};
