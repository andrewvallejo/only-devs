import React, { Component } from 'react';
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