
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Question = ({ randomQuestion, postAnswer }) => {
    const [answer, setAnswer] = useState('')

    const submitAnswer = (event) => {
        event.preventDefault()
        const newAnswer = {
                question_id: randomQuestion.id,
            answer: answer
        }
        console.log(newAnswer, "THIS IS THE NEW ANSWER");
        postAnswer(newAnswer);
        setAnswer('') 
       }

    const route = `/question-details/${randomQuestion.id}`;

    return (
        <form className='question-form answerInput'>
                <button className='shuffle-btn'> Shuffle Icon Goes Here</button>
            <header className="question-header">
                <h2>{randomQuestion.question}</h2>
            </header>
            <input 
                id={randomQuestion.id}
                type='text'
                name='answer'
                placeholder='Write your answer here.'
                value={answer}
                onChange={event => setAnswer(event.target.value)}
            />
            <button className='submit-btn' onClick={(event) => submitAnswer(event)}> SUBMIT </button>
            <Link to={route}>
            <button className='go-to-answers'> GO TO ANSWERS </button>
            </Link>
        </form>
    )
}