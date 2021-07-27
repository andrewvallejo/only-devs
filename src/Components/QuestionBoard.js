import React from 'react';
import QuestionCard from './QuestionCard';

const QuestionBoard = ({questions}) => {
    const questionCards = questions.map(questionObj => {
        return (
            <QuestionCard 
                id={questionObj.id}
                key={questionObj.id}
                question={questionObj.question}
                answers={questionObj.answers}
            />
        )
    });
    
    return (
        <section className='cardsContainer'>{questionCards.props}</section>
    )
}

export default QuestionBoard;

