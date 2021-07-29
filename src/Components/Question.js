import React from 'react';
import Answer from './Answer';

const Question = ({ questions }) => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const { id, question, answers } = randomQuestion
    return (
        <article className='question-form'>
                <div className='shuffle'>
                    <button className='shuffle-btn'>Shuffle Icon Goes Here</button>
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

// I think to do this correctly we should have this be a component that will hold state... 
    // it will also contain the submit button to set the value to POST and thus re-render App...? 

export default Question;