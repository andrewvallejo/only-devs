import React from 'react';
import { Answer } from './Answer';

export const AnswerBoard = ({ answers, rateAnswer }) => {
    return answers.map(answer => <Answer singleAnswer={answer} rate={rateAnswer} />)   
}
