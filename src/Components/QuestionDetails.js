import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchAnswers } from '../Utilities/apiCalls';


export const QuestionDetails = ({id, questions, answers}) => {
    const displayedQuestion = questions.find(question => question.id === id)
    console.log(id)
    console.log(displayedQuestion)
    
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
    
      useEffect((id) => {
        getAnswers(id)
        console.log('ANSWERS', answers)
      }, [])

    //   const fetchAnswers = (id) => {
    //     return fetch(`https://onlydevs-api.herokuapp.com/questions/${id}`)
    //     .then(response => {
    //       if(!response.ok) {
    //           throw Error('Error fetching answer')
    //       } 
    //       console.log('inside of fetch answers', response.json())
    //       return response.json()
    //   })
    //   }

    //   fetchAnswers(id)

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

