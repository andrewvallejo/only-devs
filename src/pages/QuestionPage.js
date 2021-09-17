import React, { useContext } from 'react';
import { QuestionDetails } from '../components/QuestionDetails'
import { DevContext } from '../utility/DevContext';

export const QuestionPage = () => {
  const { state, dispatch } = useContext(DevContext);

  return (
    <>
      <QuestionDetails state={state} dispatch={dispatch} />
    </>
  )
};
