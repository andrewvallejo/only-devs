import React, { useContext } from 'react';
import { QuestionDetails } from '../components/QuestionDetails'
import { DevContext } from '../utility/DevContext';

export const QuestionPage = () => {
  const { state: { selectedQuestion, answers} } = useContext(DevContext);

  return (
    <>
      <QuestionDetails question={selectedQuestion} answers={answers} />
    </>
  )
};
