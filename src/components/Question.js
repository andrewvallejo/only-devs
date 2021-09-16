
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons'

export const Question = ({ question, postAnswer, postError }) => {
    const maxLength = 300;
    const [answer, setAnswer] = useState('')
    const [isDisabled, setDisabled] = useState(true);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isRainbow, setIsRainbow] = useState(false);
    const [charsLeft, setCharsLeft] = useState(maxLength);

    const submitAnswer = (event) => {
        event.preventDefault()
        const newAnswer = {
            question_id: question.id,
            answer: answer
        }
        postAnswer(newAnswer);
        setAnswer('')
        setDisabled(true);
        setIsAnswered(true);
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
            <textarea
                className={isRainbow ? 'answer-input rainbow' : 'answer-input'}
                id={question.id}
                name='answer'
                placeholder='Write your answer here.'
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                value={answer}
                autoComplete='off'
                maxLength={maxLength}
                onChange={event => {
                    setAnswer(event.target.value);
                    if (event.target.value.length) setDisabled(false)
                    if (event.target.value.length === 0) setDisabled(true)
                    event.target.value.toLowerCase().includes('party boiii') ? setIsRainbow(true) : setIsRainbow(false);
                }}>
            </textarea>
            <div className='char-counter'>
                {charsLeft}/{maxLength}
            </div>
            {postError && <h3>{postError}</h3>}
            <button
                className='submit-btn'
                disabled={isDisabled}
                onClick={(event) => submitAnswer(event)}>
                SUBMIT
            </button>
            <button
                className={isAnswered ? 'go-to-answers gold-btn' : 'go-to-answers'}>
                GO TO ANSWERS
            </button>
        </form>
    );
}
