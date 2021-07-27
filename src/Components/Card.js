import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ }) => {

    return (
        <NavLink to={`/question-details-${id}`}>
            <article className='questionCard' id={id}>
                <h3>{question}</h3>
                <p>{answers.length} of Answers</p>
                <button>View Details</button>
            </article>
        </NavLink>
    )

}