import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Question = ({ id, question }) => {
    const [answer, setAnswer] = useState('')

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