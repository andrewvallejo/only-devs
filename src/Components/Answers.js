import React from 'react';
import { parseDate } from  '../Utilities/util'
  
 export const Answers = ({answers}) => {
    return answers.map(answer => {
        const date = parseDate(answer)

        return (
            <article className='answer' key={answer.id} id={answer.id}>
                <header class='answer-header'>
                <p className="time">Submission date: {date}</p>
                <button className='like-btn'>{answer.rating} likes</button>
                </header>
                <p className="answer-block">{answer.answer}</p>
            </article>
        )     
    })
}

