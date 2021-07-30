import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitAnswer = (event) => {
        event.preventDefault();
        let newAnswer = {
            id: this.props.id,
            timeStamp: Date.now(),
            ...this.state
        }
        //will need to create a function in App to add answer and POST with (newAnswer) being passed back
        this.clearInput()
    }

    clearInput = () => {
        this.setState({answer: ''})
    }


    render() {
       
        return (
            <form className='answerInput'>
                <input 
                    id={this.props.id}
                    type='text'
                    name='answer'
                    placeholder='Write your answer here.'
                    value={this.state.answer}
                    onChange={(event) => this.handleChange(event)}
                />
                <NavLink to={`/question-details-${this.props.id}`}>
                    <button className='submitAnswer'
                    onClick={(event) => this.submitAnswer(event)}>
                        Submit Answer
                    </button>
                </NavLink>

            </form>


        )
    }
}

export default Answer;

import React from 'react';
import Answer from './Answer';

const Question = ({ questions }) => {

    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const { id, question, answers } = randomQuestion

    const shuffleQuestion = (randomQuestion) => {
        console.log(randomQuestion)
        return randomQuestion
    }
    
    //we might need to use a hook for this shuffle.... so that it re-renders the return
    return (
        <article className='question-form'>
                <div className='shuffle'>
                    <button className='shuffle-btn' onClick={(event) => shuffleQuestion(event)}>Shuffle Icon Goes Here</button>
                </div>
                <h2 class="question">{question}</h2>
                <Answer 
                question={question}
                id={id}
                answers={answers}
                /> 
        </article>
    )
}

export default Question;