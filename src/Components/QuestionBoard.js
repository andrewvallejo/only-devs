import React from 'react';
import Card from './Card';

const QuestionBoard = ({questions}) => {

    console.log(questions)
    const questionCard = questions.map(question => {
        return (
            <Card 
                id={question.id}
                key={question.id}
                question={question.question}
                // answers={question.answers}
            />
        )
    });
    
    return (
        <section className='cards-container'>{questionCard}</section>
    )
}

export default QuestionBoard;

