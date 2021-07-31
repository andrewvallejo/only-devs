import React from 'react';
  
 export const Answers = ({answers}) => {
    //  console.log
    return answers.map(answer => {
        //Split at T
        let a = answer.answer_time.split('T');
        //Split at dashes after taking the first index
        let b = a[0].split('-');
        //Re-arrange and then join them with a dash.
        let date = b[1] + '-' + b[2] + '-' + b[0];

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

