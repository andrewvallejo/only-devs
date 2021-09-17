import React from 'react';
import { useHistory } from 'react-router';
import { getAnswers } from '../utility/apiCalls';


export const Card = ({ state, dispatch, question }) => {
  const history = useHistory()

  const handleClick = () => {
    getAnswers(question.id).then(allAnswers => {
      dispatch({ state, action: { type: 'SETQUESTION', value: question } })
      dispatch({ state, action: { type: 'SETANSWERS', value: allAnswers } })
    })
    history.push(`/questions/${question.id}`)
  }

  return (
    <article className='card question-card'>
      <h3>{question.question}</h3>
      <button className="view-details-btn"
        onClick={handleClick}>
        View Details
      </button>
    </article>
  )
}
