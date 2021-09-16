import React from 'react';

export const Card = ({ item }) => {
    return (
        <article className='question-card'>
            <h3>{item}</h3>
            <button className="view-details-btn">View Details</button>
        </article>
    )
}
