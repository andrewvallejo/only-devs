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