import React from 'react';
import { parseDate } from  '../Utilities/util'
  
 export const Answers = ({answers, vote}) => {
    return answers.map(singleAnswer => {
        console.log(singleAnswer)
        const {id, question_id, answer, rating, answer_time} = singleAnswer
        const date = parseDate(answer_time)
        return (
            <article className='answer' key={id} id={id}>
                <header className='answer-header'>
                <p className="time">Submission date: {date}</p>
                <button className='like-btn' onClick={() => (vote(question_id, id ,'upvote'))}>{rating} likes</button>
                </header>
                <p className="answer-block">{answer}</p>
            </article>
        )     
    })
}

