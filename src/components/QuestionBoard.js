import React, { useState } from 'react';
import { Card } from './Card';

export const QuestionBoard = ({ questions }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const questionCard = questions.filter((question) => {
        if (searchTerm === "") return question
        return question.question.toLowerCase().includes(searchTerm.toLowerCase()) ? question : question
    })
.map(question => {
            return (
                <Card
                    id={question.id}
                    key={question.id}
                    question={question.question}
                />
            )
        });

    return (
        <>
            <input className='search-bar'
                type="text"
                placeholder="Search Questions By Keyword..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <section className='cards-container'>
                {questionCard.length ? questionCard : <h2> There are no questions that match your search.</h2>}
            </section>
        </>
    )
};
