import React, { useState } from 'react';
import { parseDate } from  '../Utilities/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown  } from '@fortawesome/free-solid-svg-icons';

export const Answer = ({singleAnswer, rate}) => {
  const {id, question_id, answer , rating, answer_time} = singleAnswer
  const date = parseDate(answer_time)
  const upvote = [question_id, id, 'upvote']
  const downvote = [question_id, id, 'downvote']

  let [count, setCount] = useState(rating)


  const addCount = () => {
      setCount(count + 1)
      rate(upvote) 
      console.log(rating)   
  }

  const removeCount = () => {
      setCount(count - 1)
      rate(downvote)
  }



      return (
          <article className='answer' key={id} id={id}>
              <header className='answer-header'>
                  <p className="time">Submission date: {date}</p>
                  <FontAwesomeIcon 
                  onClick={() => (addCount())} icon={faChevronCircleUp}   
                  />
                          <h3>{count}</h3>
                  <FontAwesomeIcon 
                      onClick={() => (removeCount())} icon={faChevronCircleDown}           
                      />
              </header>
              <p className="answer-block">{answer}</p>
          </article>
      )     
}