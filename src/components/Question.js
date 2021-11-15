import React from 'react';
import { useNavigate } from 'react-router';

import { Answer } from './Answer';

export const Question = ({ state, dispatch }) => {
  const navigate = useNavigate();
  const answers = state.answers.map(answer => <Answer key={answer.id} singleAnswer={answer} context={(state, dispatch)} />);

  return (
    <section className='details-container'>
      <header className='question-header'>
        <button className='return-btn' onClick={() => navigate('/')}>
          <ion-icon name="caret-back-outline" />
        </button>
        <h2 className='question'>{state.selectedQuestion.question}</h2>
      </header>
      <aside className='answers-board'>
        {answers}
      </aside>
    </section>
  );
};
