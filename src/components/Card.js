import React from 'react';
import { useNavigate } from 'react-router';
import { getAnswers } from '../utility/apiCalls';


export const Card = ({ state, dispatch, question }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    getAnswers(question.id).then(allAnswers => {
      dispatch({ state, action: { type: 'SETQUESTION', value: question } })
      dispatch({ state, action: { type: 'SETANSWERS', value: allAnswers } })
    })
    navigate(`/questions/${question.id}`)
  }

  return (
    <article className='card question-card'>
      <h3>{question.question}</h3>
      <button className='view-details-btn'
        onClick={handleClick}>
        View Details
      </button>
    </article>
  )
}
