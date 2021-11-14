import React from 'react';
import { QuestionCard as Card } from '../QuestionCard';

export const SideBar = ({ context }) => {

  const questionCard = context.state.questions.map(question => {
    return <Card key={question.id} context={context} question={question} />;
  });

  return (
    <section className='side-bar'>
      {questionCard}
    </section>
  );
};
