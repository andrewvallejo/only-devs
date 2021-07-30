
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Question = ({ randomQuestion, postAnswer }) => {
    const [answer, setAnswer] = useState('')
    // const shuffleQuestion = (randomQuestion) => {
    //     console.log(randomQuestion)
    //     return randomQuestion
    // }

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

    return (
        <form className='question-form answerInput'>
            <header className="question-header">
                <h2>{randomQuestion.question}</h2>
                <button className='shuffle-btn'> Shuffle Icon Goes Here</button>
            </header>
            <input 
                id={randomQuestion.id}
                type='text'
                name='answer'
                placeholder='Write your answer here.'
                value={answer}
                onChange={event => setAnswer(event.target.value)}
            />
                <NavLink to={`/question-details/:${randomQuestion.id}`}>
                <button onClick={(event) => submitAnswer(event)}> SUBMIT </button>
                </NavLink>
        </form>
    )
}

{/* <NavLink to={`/question-details/:${randomQuestion.id}`}> */}
// 