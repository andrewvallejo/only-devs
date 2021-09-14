import React from 'react';
import { Answer } from './Answer';

export const AnswerBoard = ({ answers, rateAnswer }) => {
    return answers.map(answer => {
        return (
            <Answer singleAnswer={answer} rate={rateAnswer} />
        )
    })
}
