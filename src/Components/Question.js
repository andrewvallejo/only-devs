
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Question = ({ questions, add }) => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const {id, question} = randomQuestion   
    const [answer, setAnswer] = useState('')
    const shuffleQuestion = (randomQuestion) => {
        console.log(randomQuestion)
        return randomQuestion
    }
    const submitAnswer = (event) => {
        event.preventDefault()
        const newAnswer = {
            answer    
        }
        add(newAnswer);
        setAnswer('') 
       }

    return (
        <form className='question-form answerInput'>
            <header className="question-header">
                <h2>{question}</h2>
                <button className='shuffle-btn' onClick={(event) => shuffleQuestion(event)}>Shuffle Icon Goes Here</button>
            </header>
            <input 
                id={question.id}
                type='text'
                name='answer'
                placeholder='Write your answer here.'
                value={answer}
                onChange={event => setAnswer(event.target.value)}
            />
            <NavLink to={`/questions/${id}}`}>
                <button onClick={event => submitAnswer(event)}>SUBMIT</button>
            </NavLink>
        </form>
    )
}