import React from 'react';
import Card from 'react';

const QuestionBoard = ({questions}) => {
    
    console.log(questions)

    const questionCards = questions.map(question => {
        return (
            <Card 
                id={question.id}
                key={question.id}
                question={question.question}
                answers={question.answers}
            />
        )
    })
    
    return (
        <section className='cardsContainer'>{questionCards}</section>
    )
}

export default QuestionBoard;

