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
      console.log(isDisabled, "INSIDE Increment COUNT");
  }

  const removeCount = (e) => {
      e.preventDefault()

      setCount(count - 1)
      rate(downvote)
      setIsDisabled(true);
      console.log(isDisabled, "INSIDE REMOVE COUNT");
  }

      return (
          <article className='answer' key={id} id={id}>
              <header className='answer-header'>
                  <p className="time">Submission date: {date}</p>
                  <button
                        className={isDisabled ? 'disabled-vote' : ''}
                        disabled={isDisabled}
                        onClick={(e) => addCount(e)}
                  >
                    <FontAwesomeIcon
                        //className={isDisabled ? 'disabled-vote' : ''} 
                        
                        icon={faChevronCircleUp}
                        //disable={isDisabled}   
                    />
                  </button>
                          <h3>{count} Recs</h3>
                    <button
                        className={isDisabled ? 'disabled-vote' : ''}
                        disabled={isDisabled}
                        onClick={(e) => removeCount(e)}
                    >
                        <FontAwesomeIcon 
                            //className={isDisabled ? 'disabled-vote' : ''}
                            icon={faChevronCircleDown}
                            //disable={isDisabled}           
                        />
                    </button>
              </header>
              <p 
                className='voter-msg'> 
                    {isDisabled ? 'Recommendation recorded.': ''} 
                    <hr/>
              </p>
              <p 
              className="answer-block">
                {answer}  
              </p>
          </article>
      )     
}