import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { AnswerBoard } from './AnswerBoard';
import { useHistory } from 'react-router';


export const QuestionDetails = ({ state, dispatch }) => {
  const history = useHistory()

  const onBack = (event) => {
    history.goBack()
  }

  return (
    <section className='details-container'>
      <header className="question-header">
        <button className='return-btn' onClick={(event) => onBack(event)}>
          <FontAwesomeIcon className='arrow-icon' icon={faAngleDoubleLeft} />
        </button>
        <h2 className="question">{state.selectedQuestion.question}</h2>
      </header>
      <div className="answers-board">
      {/* <AnswerBoard /> */}
      </div>
    </section>
  )
}
