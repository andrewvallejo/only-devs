import React from 'react';

  
 export const Answers = ({answers}) => {
        const allAnswers = answers.map(answer => {
            return (
                <article className='answer' key={answer.id} id={answer.id}>
                    <p>{answer.answer_time}</p>
                    <button className='rating'>{answer.rating} likes</button>
                    <p>{answer.answer}</p>
                </article>
            )     
        })
        return allAnswers
    }

