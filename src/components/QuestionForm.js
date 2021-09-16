
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { postAnswer } from '../utility/apiCalls';

export const QuestionForm = ({ question }) => {
  const maxLength = 300;
  const [answer, setAnswer] = useState('')
  const [isDisabled, setDisabled] = useState(true);
  const [isAnswered, setIsAnswered] = useState(false);
  const [charsLeft, setCharsLeft] = useState(maxLength);

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

  useEffect(() => {
    setCharsLeft(maxLength - answer.length);
  }, [answer])

  return (
    <form className='question-form'>
      <button className='shuffle-btn'>
        <FontAwesomeIcon className='shuffle-icon' icon={faRandom} alt='shuffle question' />
      </button>
      <header className="question-header">
        <h2>{question.question}</h2>
      </header>
      <textarea className='answer-input'
        id={question.id}
        name='answer'
        value={answer}
        placeholder='Write your answer here.'
        maxLength={maxLength}
        autoComplete='off'
        onKeyPress={(event) => event.key === 'Enter' && event.preventDefault()}
        onChange={event => onChange(event)}>
      </textarea>
      <div className='char-counter'>
        {charsLeft}/{maxLength}
      </div>
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
