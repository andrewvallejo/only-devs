import { Answers } from './Answers';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchAnswers } from '../Utilities/apiCalls';


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
                <header>
                <NavLink to= '/all-questions'>
                    <button className='return-to-all-btn'>X</button>
                </NavLink>
                <h3>{this.displayQuestion()}</h3>
                </header>
                <Answers answers={this.state.answers}/>
            </section>
        )
    }
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