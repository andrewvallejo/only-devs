export const fetchQuestions = () => {
  return fetch('https://onlydevs-api.herokuapp.com/questions')
  .then(response => {
    if (!response.ok) {
      throw Error()
    }
    return response.json()
  })
}

export const fetchAnswers = (id) => {
  return fetch(`https://onlydevs-api.herokuapp.com/questions/${id}`)
  .then(response => {
    if(!response.ok) {
        throw Error('Error fetching answers')
    } 
    return response.json()
})
}

export const uploadAnswer = (data) => {
  console.log("THIS IS JSONIFIED DATA", JSON.stringify(data));
  return fetch('https://onlydevs-api.herokuapp.com/questions/answer', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(response => {
    if(!response.ok) {
      throw Error('Error uploading answer')
  } 
    return response.json()
})
  .catch(err => console.error(err));
}

export const postAnswerRating = (data) => {
const [questionId, answerId, vote] =  data
 let answerData = {
    "question_id": questionId,
    "answer_id": answerId,
    "vote": vote,
}
  return fetch('https://onlydevs-api.herokuapp.com/questions/answer/vote', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(answerData)
  })
  .then(response => response.json())
  .catch(err => console.error(err));
} 


