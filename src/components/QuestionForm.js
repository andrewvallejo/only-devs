
import React, { useState } from 'react';
import { postAnswer } from '../utility/apiCalls';

export const QuestionForm = ({ question }) => {
  const [answer, setAnswer] = useState('')
  const [isDisabled, setDisabled] = useState(true);
  const [isAnswered, setIsAnswered] = useState(false);

  const submitAnswer = (event) => {
    event.preventDefault()
    postAnswer({ newAnswer: { question_id: question.id, answer: answer } })
    clear()
  }

  const clear = () => {
    setAnswer('');
    setDisabled(true);
    setIsAnswered(true);
  }

  const onChange = (event) => {
    setAnswer(event.target.value)
    event.target.value.length ? setDisabled(false) : setDisabled(true)
  }

  return (
    <form className='question-form'>
      <button className='shuffle-btn'>
          <p>shuffle</p>
      </button>
      <header className='question-header'>
        <h2>{question.question}</h2>
      </header>
      <textarea className='answer-input'
        id={question.id}
        name='answer'
        value={answer}
        placeholder='Write your answer here.'
        autoComplete='off'
        onKeyPress={(event) => event.key === 'Enter' && event.preventDefault()}
        onChange={event => onChange(event)}>
      </textarea>
      <button className='submit-btn'
        disabled={isDisabled}
        onClick={(event) => submitAnswer(event)}>
        submit
      </button>
      <button className={`go-to-answers ${isAnswered && 'gold-btn'}`}>
        go to answers
      </button>
    </form>
  );
}
