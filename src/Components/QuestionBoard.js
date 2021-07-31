import React from 'react';
import { Card } from './Card';
import {useState} from 'react';

export const QuestionBoard = ({questions}) => {
    const [searchTerm, setSearchTerm] = useState('');


    console.log(questions)
    const questionCard = questions.filter((question) => {
        if(searchTerm == "") {
            return question;
        } else if (question.question.toLowerCase().includes(searchTerm.toLowerCase())) {
            return question;
        }
    }).map(question => {
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

        <section className='cards-container'>
        <input 
            type="text" 
            placeholder="Search..." 
            onChange={(event) => {
                setSearchTerm(event.target.value);
                }} />
        {questionCard}
        </section>
    )
}


