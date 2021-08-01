
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons'



export const Question = ({ randomQuestion, postAnswer }) => {
    const [answer, setAnswer] = useState('')
    const [isDisabled, setDisabled] = useState(true);
    const [isAnswered, setIsAnswered] = useState(false);

    const submitAnswer = (event) => {
        event.preventDefault()
        const newAnswer = {
                question_id: randomQuestion.id,
            answer: answer
        }
        //console.log(newAnswer, "THIS IS THE NEW ANSWER");
        postAnswer(newAnswer);
        setAnswer('')
        setDisabled(true);
        setIsAnswered(true); 
       }

    const route = `/question-details/${randomQuestion.id}`;
    //let isEnabled = answer.length;

    return (
        <form className='question-form answerInput'>
                <button className='shuffle-btn'>
                <FontAwesomeIcon className='shuffle-icon' icon={faRandom} /> 
                </button>
            <header className="question-header">
                <h2>{randomQuestion.question}</h2>
            </header>
            <input 
                id={randomQuestion.id}
                type='text'
                name='answer'
                placeholder='Write your answer here.'
                value={answer}
                onChange={event => {
                        setAnswer(event.target.value);
                    if (event.target.value.length){
                        setDisabled(false);
                    } 
                    if (event.target.value.length == 0) {
                        setDisabled(true);
                    }
                }}
            />

            <button 
                className='submit-btn'
                disabled={isDisabled}
                onClick={(event) => submitAnswer(event)}>
                    SUBMIT 
            </button>

            <Link to={route}>
                <button 
                    className={isAnswered ? 'go-to-answers gold-btn' : 'go-to-answers'}>
                    GO TO ANSWERS
                </button>
            </Link>
        </form>
    )
}