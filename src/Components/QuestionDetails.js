import { Answers } from './Answers';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchAnswers } from '../Utilities/apiCalls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


export class QuestionDetails extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            answers: [],
            error: ''
        }
    }

    displayQuestion = () => {
        const displayedQuestion = this.props.questions.find(question => question.id === this.props.id)
        return displayedQuestion.question
    }

     componentDidMount = () => {
             fetchAnswers(this.props.id)
             .then(data => this.setState({answers: data}))
             .catch(error => this.setState({error: 'Oops server is down! Please try again.'}))
         }

    render() {
        return (
            <section className='details-container'>
                <header className ="question-header">
                    <NavLink to= '/'>
                        <button className='return-btn'>
                        <FontAwesomeIcon className='arrow-icon' icon={faAngleDoubleLeft} /> 
                        </button>
                    </NavLink>
                <h2 className="question">{this.displayQuestion()}</h2>
                </header>
                <div className="answers-container">
                {!this.state.answers.length && <h3 className='no-answers'>This question hasn't been answered yet.</h3>}
                     <Answers answers={this.state.answers} rateAnswer={this.props.rateAnswer}/>
                </div>
            </section>
        )
    }
}

QuestionDetails.propTypes = {
    answers: PropTypes.array,
    error: PropTypes.string,
  }

// Hook Version
    
    // const [answers, setAnswers] = useState([])
    // const [error, setError] = useState('')

    // const getAnswers = async (id) => {
    //     setError('')
    //     try {
    //       const response = await fetchAnswers(id)
    //       const answers = await response.json()
    //       setAnswers(answers)
    //     } catch(error) {
    //       setError(error.message)
    //     }
    //   }
    
    //   useEffect((id) => {
    //     getAnswers(id)
    //     console.log('ANSWERS', answers)
    //   }, [])

    //   const fetchAnswers = (id) => {
    //     return fetch(`https://onlydevs-api.herokuapp.com/questions/${id}`)
    //     .then(response => {
    //       if(!response.ok) {
    //           throw Error('Error fetching answer')
    //       } 
    //       console.log('inside of fetch answers', response.json())
    //       return response.json()
    //   })
    //   }