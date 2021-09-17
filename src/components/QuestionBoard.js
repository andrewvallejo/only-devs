import React from 'react';
import { useContext } from 'react';
import { DevContext } from '../utility/DevContext';
import { Card } from './Card';

export const QuestionBoard = () => {
  const { state: { questions } } = useContext(DevContext);

  const questionCard = questions.map(question => <Card key={question.id} id={question.id} question={question} />)

  return (
    <>
      <section className='cards-container'>
        {questionCard}
      </section>
    </>
  )
};
