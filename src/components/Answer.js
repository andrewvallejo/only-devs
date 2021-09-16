import React, { useState } from 'react';
import { parseDate } from '../utility/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';


export const Answer = ({ singleAnswer, rate }) => {
  const { id, question_id, answer, rating, answer_time } = singleAnswer

  const [isDisabled, setIsDisabled] = useState(false)
  const [count, setCount] = useState(rating)

  const date = parseDate(answer_time)
  const upVote = [question_id, id, 'upVote']
  const downVote = [question_id, id, 'downVote']


  const addCount = (e) => {
    e.preventDefault()
    setCount(count + 1)
    rate(upVote)
    setIsDisabled(true);
  }

  const removeCount = (e) => {
    e.preventDefault()
    setCount(count - 1)
    rate(downVote)
    setIsDisabled(true);
  }

  return (
    <article className='answer' key={id} id={id}>
      <header className='answer-header'>
        <p className="time">Submission date: {date}</p>
        <div className="arrow-container">
          <button
            className={isDisabled ? 'disabled-vote' : ''}
            disabled={isDisabled}
            onClick={(e) => addCount(e)}>
            <FontAwesomeIcon icon={faChevronCircleUp} />
          </button>
          <h3 className='rating-number'>{count}</h3>
          <button
            className={isDisabled ? 'disabled-vote' : ''}
            disabled={isDisabled}
            onClick={(e) => removeCount(e)}>
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </button>
        </div>
      </header>
      <p>
        {isDisabled ? 'Recommendation recorded.' : ''}
        <hr />
      </p>
      <p className="answer-block">
        {answer}
      </p>
    </article>
  )
}