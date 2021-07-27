import React from 'react';
import Answer from './Answer';

const Question = ({ questions }) => {
    const randomQuestionObj = questions[Math.floor(Math.random() * questions.length)];
    const { id, question, answers } = randomQuestionObj
    return (
        <article className= 'questionBox'>
            <div>
                <h2>{question}</h2>
            </div>
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