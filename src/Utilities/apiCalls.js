export const fetchQuestions = () => {
  return fetch('https://onlydevs-api.herokuapp.com/questions')
  .then(response => {
    if (!response.ok) {
      throw Error()
    }
    return response.json()
  })
}

// export const fetchAnswers = (id) => {
  
// }
