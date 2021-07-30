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


