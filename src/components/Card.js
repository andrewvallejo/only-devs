import React from 'react';

export const Card = ({ question, id }) => {
    return (
        <article className='question-card' id={id}>
            <h3>{question}</h3>
            <button className="view-details-btn">View Details</button>
        </article>
    )
}
