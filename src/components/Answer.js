import React from 'react';

import { parseDate } from '../utility/util';

export const Answer = ({ singleAnswer }) => {
  const { id, answer, answer_time } = singleAnswer;
  const date = parseDate(answer_time);

  return (
    <article className='answer' key={id} id={id}>
      <header className='answer-header'>
        <p className='time'>Submission date: {date}</p>
      </header>
      {answer}
    </article>
  );
};