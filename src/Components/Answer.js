import React, { useState } from 'react';
import { parseDate } from  '../Utilities/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown  } from '@fortawesome/free-solid-svg-icons';

export const Answer = ({singleAnswer, rate}) => {

  const [isDisabled, setIsDisabled] = useState(false);

  const {id, question_id, answer , rating, answer_time} = singleAnswer
  const date = parseDate(answer_time)
  const upvote = [question_id, id, 'upvote']
  const downvote = [question_id, id, 'downvote']

  let [count, setCount] = useState(rating)

  const addCount = (e) => {
      e.preventDefault()

      setCount(count + 1)
      rate(upvote) 
      setIsDisabled(true);
  }

  const removeCount = (e) => {
      e.preventDefault()

      setCount(count - 1)
      rate(downvote)
      setIsDisabled(true);
  }

      return (
          <article className='answer' key={id} id={id}>
              <header className='answer-header'>
                  <p className="time">Submission date: {date}</p>
                  

                <div className="rating-container">
                  <div className="arrow-container">
                  <button
                    className={isDisabled ? 'disabled-vote' : ''}
                    disabled={isDisabled}
                    onClick={(e) => addCount(e)}
                  >
                    <FontAwesomeIcon
                        icon={faChevronCircleUp}
                    />
                  </button>
                  <h3 className='rating-number'>{count}</h3>
                  <button
                    className={isDisabled ? 'disabled-vote' : ''}
                    disabled={isDisabled}
                    onClick={(e) => removeCount(e)}
                  >
                    <FontAwesomeIcon 
                        icon={faChevronCircleDown}
                    />
                </button>
                </div>
                <p 
                className='voter-msg'> 
                {isDisabled ? 'Voted!': ''} 
                <hr/>
              </p>
              </div>
              </header>
           
              <p 
                className="answer-block">
                {answer}  
              </p>
          </article>
      )     
}
