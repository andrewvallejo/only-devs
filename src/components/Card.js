import React from 'react';
import { useHistory } from 'react-router';

export const Card = ({ id, item }) => {
    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault()
        history.push(`/questions/${id}`)
    }

    return (
        <article className='card question-card'>
            <h3>{item}</h3>
            <button className="view-details-btn"
                onClick={(event) => handleClick(event)}>
                View Details
            </button>
        </article>
    )
}
