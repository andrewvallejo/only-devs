// const postAnswer = (newAnswer) => {
//   uploadAnswer(newAnswer)
//     .then(response => {
//       if (!response) {
//         dispatch({ error: 'Oops,  our server is down! Your wasn\'t posted. Please try again later.' })
//         throw Error('Error fetching answers')
//       }
//       return response.json()
//     })
//     .catch(error => console.error(error))
// }

// const rateAnswer = (answer) => {
//   postAnswerRating(answer)
//     .then(response => { console.log(response) })
// }


////// ANSSWER BOARD

// import { AnswerBoard } from './AnswerBoard';
// import React from 'react';

// import { fetchAnswers } from '../utility/apiCalls';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';


{/* <button className='return-btn'>
                <FontAwesomeIcon className='arrow-icon' icon={faAngleDoubleLeft} />
            </button> */}
{/* <h2 className='question'>{displayQuestion()}</h2> */ }
{/* <div className='answers-board'>
                {error && <h3 className='no-answers'>{error}</h3>}
                {(error && isLoading) && <h3> Loading... answers</h3>}
                {(answers.length && error) && <h3 className='no-answers'>This question has not been answered yet.</h3>}
                 <AnswerBoard answers={answers}  /> 
            </div> */}

    // const [answers, setAnswers] = useState([])

    // useEffect(() => {
    //     fetchAnswers(this.props.id)
    //         .then(data => {
    //             setAnswers(data)
    //             setIsLoading(true)
    //         })
    //         .catch(error => setError({ error: 'Oops, unable to fetch your answers! Please try again later.' }))
    // }, [])

    // const displayQuestion = () => {

    //     const displayedQuestion = questions.find(question => question.id === this.props.id)
    //     return displayedQuestion.question
    // }


		// Search bar
		

// 		const [searchTerm, setSearchTerm] = useState('')
//     <input className='search-bar'
//     type='text'
//     placeholder='Search Questions By Keyword...'
//     onChange={(e) => setSearchTerm(e.target.value)}
// />