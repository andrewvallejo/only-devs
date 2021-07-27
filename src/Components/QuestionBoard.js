import React from 'react';
import QuestionCard from './QuestionCard';

const QuestionBoard = ({questions}) => {
    const questionCards = questions.map(question => {
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
        <section className='cardsContainer'>{questionCards.props}</section>
    )
}

export default QuestionBoard;

