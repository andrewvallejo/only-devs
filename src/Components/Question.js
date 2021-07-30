import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Question = ({ questions, add }) => {
    const [id, question] = questions
    const [answer, setAnswer] = useState('')
    const submitAnswer = (event) => {
        event.preventDefault()
        const newAnswer = {
            id: Date.now(),   
            answer    
        }
        add(newAnswer);
        setAnswer('') 
       }

    return (
        <form className='question-form'>
            <input 
                id={question.id}
                type='text'
                name='answer'
                placeholder='Write your answer here.'
                value={answer}
                onChange={event => setAnswer(event.target.value)}
            />
            <NavLink to={`/questions/${id}}`}>
                <button>SUBMIT</button>
            </NavLink>
        </form>
    )
}