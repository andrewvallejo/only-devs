import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import { Answer } from './Answer';

export const QuestionDetails = ({ state, dispatch }) => {
  const history = useHistory()
  const answers = state.answers.map(answer => <Answer singleAnswer={answer} />)

  return (
    <section className='details-container'>
      <header className="question-header">
        <button className='return-btn' onClick={() => history.goBack()}>
          <FontAwesomeIcon className='arrow-icon' icon={faAngleDoubleLeft} />
        </button>
        <h2 className="question">{state.selectedQuestion.question}</h2>
      </header>
      <aside className="answers-board">
        {answers}
      </aside>
    </section>
  )
}
