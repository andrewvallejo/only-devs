import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ question, id, answers }) => {
    return (
        <NavLink to={`/question-details-${id}`}>
            <article className='question-card' id={id}>
                <h3>{question}</h3>
                <p>{answers.length} of Answers</p>
                <button>View Details</button>
            </article>
        </NavLink>
    )
}

export default Card;