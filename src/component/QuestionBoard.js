import React from 'react';
import { Card } from './Card';

export const QuestionBoard = ({ questions }) => {
   
  const questionCard = questions.map(question => <Card id={question.id} key={question.id} question={question.question} />)
  
  return (
      <>
        <section className='cards-container'>
          {questionCard}
        </section>
      </>
    )
};
