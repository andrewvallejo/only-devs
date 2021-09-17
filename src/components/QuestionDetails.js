import { AnswerBoard } from './AnswerBoard';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { getAnswers } from '../utility/apiCalls';

export const QuestionDetails = ({ question }) => {

  return (
    <section className='details-container'>
      <header className="question-header">
        <button className='return-btn'>
          <FontAwesomeIcon className='arrow-icon' icon={faAngleDoubleLeft} />
        </button>
        <h2 className="question">{question.question}</h2>
      </header>
      <div className="answers-board">
        {/* <AnswerBoard answers={answers} /> */}
      </div>
    </section>
  )
}
