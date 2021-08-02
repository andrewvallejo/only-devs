import React from 'react';
import { Answer } from './Answer';
import PropTypes from 'prop-types';
  
 export const AnswerBoard = ({answers, rateAnswer}) => {
    return answers.map(answer => {
        return (
            <Answer singleAnswer={answer} rate={rateAnswer} />
    )
    })
}


AnswerBoard.propTypes = {
    answers: PropTypes.array,
    vote: PropTypes.string
}
