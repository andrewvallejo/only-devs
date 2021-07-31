import React from 'react';
  
 export const Answers = ({answers}) => {
    return answers.map(answer => {
        return (
            <article className='answer' key={answer.id} id={answer.id}>
                <header class='answer-header'>
                <p className="time">{answer.answer_time}</p>
                <button className='like-btn'>{answer.rating} likes</button>
                </header>
                <p className="answer-block">{answer.answer}</p>
            </article>
        )     
    })
}

