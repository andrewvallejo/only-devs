import React from 'react';
import { NavLink } from 'react-router-dom';


const QuestionDetails = ({id, questions, answers}) => {

    const displayedQuestion = questions.find(question => question.id === id)
    
    //we need to somehow pass in JUST the answers for that question id into props ... map through them to create a separate
    //div for each one. then we can insert them in our return in line 25 (probably not the correct layout, but just giving you the general idea)
    const allAnswers = answers.map(answer => {
        return (
            <article className='answer'>
                <div className='time-rating'>
                    <p>{answer.time_stamp}</p>
                    <button className='rating'>{answer.rating} likes</button>
                </div>
                <p>{answer.answer}</p>
            </article>
        )     
    })

    return (
        <section className='details-container'>
            <NavLink to= '/all-questions'>
                <button className='return-to-all'>X</button>
            </NavLink>
            <div>
                <h3>{displayedQuestion.question}</h3>
            </div>
            <section className='all-answers'>{allAnswers}</section>
        </section>
    )






}

export default QuestionDetails;