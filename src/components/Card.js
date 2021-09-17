import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { DevContext } from '../utility/DevContext';

export const Card = ({ question }) => {
    const { state, dispatch } = useContext(DevContext);
    const history = useHistory()
    const handleClick = (event) => {
        event.preventDefault()
        dispatch({ state, action: {type: 'SETQUESTION', value: question} })
        history.push(`/questions/${question.id}`)
    }

    return (
        <article className='card question-card'>
            <h3>{question.question}</h3>
            <button className="view-details-btn"
                onClick={(event) => handleClick(event)}>
                View Details
            </button>
        </article>
    )
}
