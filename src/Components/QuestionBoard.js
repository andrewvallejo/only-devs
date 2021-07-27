import React from 'react';
import QuestionCard from 'react';

const QuestionBoard = ({questions}) => {
    
    console.log('QUESTIONS',questions)

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
    
    console.log("WHAT??", questionCards.props)
   
    return (

        <section className='cardsContainer'>{questionCards.props}</section>
    )
}

export default QuestionBoard;

