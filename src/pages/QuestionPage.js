import React, { useContext } from 'react';
import { DevContext } from '../utility/DevContext';
import { QuestionDetails } from '../components/QuestionDetails'

export const QuestionPage = () => {
  const { state } = useContext(DevContext);

  return (
    <>
      <QuestionDetails
        key={state.question.id}
        id={state.question.id}
        questions={state.questions} />
    </>
  )
};
