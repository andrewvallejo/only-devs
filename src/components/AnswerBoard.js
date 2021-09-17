import React from 'react';
import { Answer } from './Answer';

export const AnswerBoard = ({ answers }) => {
    return answers.map(answer => <Answer singleAnswer={answer}/>)   
}
