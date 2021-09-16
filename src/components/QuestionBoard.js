import React from 'react';
import { Card } from './Card';

export const QuestionBoard = ({ questions }) => {
   
  const questionCard = questions.map(question => <Card key={question.id} id={question.id} item={question.question} />)
  
  return (
      <>
        <section className='cards-container'>
          {questionCard}
        </section>
      </>
    )
};
