import React from 'react';
import Answer from './Answer';
// import { NavLink, Route } from 'react-router-dom';

const Question = ({questions}) => {

    const randomQuestionObj = questions[Math.floor(Math.random() * questions.length)];
    console.log(randomQuestionObj)
    const { id, question, answers } = randomQuestionObj
    // const randomQuestion = calculate random question here
    return (
        <article className= 'questionBox'>
            <div>
                <h2>{question}</h2>
            </div>
            <form className= 'answerInput'>
                <Answer 
                question={question}
                id={id}
                answers={answers}
                /> 
            </form>
        </article>
    )
}

//I think to do this correctly we should have this be a component that will hold state... it will also contain the submit button to set the value to POST and thus re-render App...? */}

export default Question;