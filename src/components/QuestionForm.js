import React, { useState } from 'react'

import { postAnswer } from '../utility/apiCalls'

export const QuestionForm = ({ question }) => {
  const [answer, setAnswer] = useState('')
  const [isDisabled, setDisabled] = useState(true)

  const submitAnswer = (event) => {
    event.preventDefault()
    postAnswer({ newAnswer: { question_id: question.id, answer: answer } })
    clearAnswer()
  }

  const onChange = (event) => {
    setAnswer(event.target.value)
    event.target.value ? setDisabled(false) : setDisabled(true)
  }

  const clearAnswer = () => {
    setAnswer('')
    setDisabled(true)
  }

  return (
    <form className="question-form">
      <textarea
        className="answer-input"
        id={question.id}
        name="answer"
        value={answer}
        placeholder="Write your answer here."
        autoComplete="off"
        onKeyPress={(event) => event.key === 'Enter' && event.preventDefault()}
        onChange={(event) => onChange(event)}></textarea>
      <button
        className="submit-btn"
        disabled={isDisabled}
        onClick={(event) => submitAnswer(event)}>
        submit
      </button>
    </form>
  )
}
