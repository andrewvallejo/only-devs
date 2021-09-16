import React from 'react';

export const Card = ({ item }) => {
    return (
        <article className='card question-card'>
            <h3>{item}</h3>
            <button className="view-details-btn">View Details</button>
        </article>
    )
}
