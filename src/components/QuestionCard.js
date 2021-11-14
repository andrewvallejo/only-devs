import React from 'react';
import { useNavigate } from 'react-router';
import { getAnswers } from '../utility/apiCalls';


export const QuestionCard = ({ context, question }) => {
  const { state, dispatch } = context
  const navigate = useNavigate()

  const handleClick = () => {
    getAnswers(question.id).then(allAnswers => {
      dispatch({ state, action: { type: 'SETQUESTION', value: question } })
      dispatch({ state, action: { type: 'SETANSWERS', value: allAnswers } })
    })
    navigate(`/questions/${question.id}`)
  }

  return (
    <article  tabindex="0" className='question-card' onClick={handleClick} onKeyPress={handleClick}>
      <h3>{question.question}</h3>
    </article>
  )
}
