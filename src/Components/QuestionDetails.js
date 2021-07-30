import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchAnswers } from '../Utilities/apiCalls';


const QuestionDetails = ({id, questions}) => {

    const displayedQuestion = questions.find(question => question.id === id)
    
    const [answers, setAnswers] = useState([])
    const [error, setError] = useState('')

    const getAnswers = async (id) => {
        setError('')
        try {
          const response = await fetchAnswers(id)
          const answers = await response.json()
          setAnswers(answers)
        } catch(error) {
          setError(error.message)
        }
      }
    
      useEffect(() => {
        getAnswers()
      }, [])
    
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