import React from 'react';
import { parseDate } from  '../Utilities/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown  } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
  
 export const Answers = ({answers, rateAnswer}) => {
    return answers.map(singleAnswer => {
        const {id, question_id, answer, rating, answer_time} = singleAnswer
        const date = parseDate(answer_time)
        const upvote = [question_id, id, 'upvote']
        const downvote = [question_id, id, 'downvote']

        return (
            <article className='answer' key={id} id={id}>
                <header className='answer-header'>
                    <p className="time">Submission date: {date}</p>
<FontAwesomeIcon onClick={() => (rateAnswer(upvote))} icon={faChevronCircleUp} />
                <h3>{rating}</h3>
<FontAwesomeIcon onClick={() => (rateAnswer(downvote))} icon={faChevronCircleDown} />
                </header>
                <p className="answer-block">{answer}</p>
            </article>
        )     
    })
}

Answers.propTypes = {
    answers: PropTypes.array,
    vote: PropTypes.string
}
