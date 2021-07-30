import React from 'react';
import { Card } from './Card';

export const QuestionBoard = ({questions}) => {

    const questionCard = questions.map(question => {
        return (
            <Card 
                id={question.id}
                key={question.id}
                question={question.question}
                answers={question.answers}
            />
        )
    });
    
    return (
        <section className='cards-container'>{questionCard}</section>
    )
}


