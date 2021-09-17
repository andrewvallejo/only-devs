import React from 'react';
import { Card } from './Card';

export const QuestionBoard = ({ state, dispatch }) => {
  const questionCard = state.questions.map(question => {
    return <Card key={question.id} state={state} dispatch={dispatch} question={question} />
  })

  return (
    <section className='cards-container'>
      {questionCard}
    </section>
  )
};
