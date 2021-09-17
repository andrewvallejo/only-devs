import React from 'react';
import { useHistory } from 'react-router';

export const Card = ({ state, dispatch, question }) => {
  const history = useHistory()

  const handleClick = (event) => {
    event.preventDefault()
    dispatch({ state, action: { type: 'SETQUESTION', value: question } })
    history.push(`/questions/${question.id}`)
  }

  return (
    <article className='card question-card'>
      <h3>{question.question}</h3>
      <button className="view-details-btn"
        onClick={(event) => handleClick(event)}>
        View Details
      </button>
    </article>
  )
}
