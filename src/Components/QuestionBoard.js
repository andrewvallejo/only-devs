import React from 'react';
import QuestionCard from './Card';

const QuestionBoard = ({questions}) => {

    const questionCard = questions.map(question => {
        return (
            <QuestionCard 
                id={question.id}
                key={question.id}
                question={question.question}
                answers={question.answers}
            />
        )
    });
    
    return (
        <section className='cardsContainer'>{questionCard}</section>
    )
}

export default QuestionBoard;

