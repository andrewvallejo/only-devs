import { AnswerBoard } from './AnswerBoard';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchAnswers } from '../utility/apiCalls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

export const QuestionDetails = ({ rateAnswer, questions }) => {
    const [answers, setAnswers] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchAnswers(this.props.id)
            .then(data => {
                setAnswers(data)
                setIsLoading(true)
            })
            .catch(error => setError({ error: 'Oops, unable to fetch your answers! Please try again later.' }))
    }, [])

    const displayQuestion = () => {
        const displayedQuestion = questions.find(question => question.id === this.props.id)
        return displayedQuestion.question
    }

    return (
        <section className='details-container'>
            <header className="question-header">
                <NavLink to='/'>
                    <button className='return-btn'>
                        <FontAwesomeIcon className='arrow-icon' icon={faAngleDoubleLeft} />
                    </button>
                </NavLink>
                <h2 className="question">{displayQuestion()}</h2>
            </header>
            <div className="answers-board">
                {error && <h3 className='no-answers'>{error}</h3>}
                {(error && isLoading) && <h3> Loading... answers</h3>}
                {(answers.length && error) && <h3 className='no-answers'>This question has not been answered yet.</h3>}
                <AnswerBoard answers={answers} rateAnswer={rateAnswer} />
            </div>
        </section>
    )
}
