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

export const postAnswer = (data) => {
  return fetch('https://onlydevs-api.herokuapp.com/questions/answer' , 
  {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(response => {
    if(!response.ok) {
        throw Error('Error posting answer')
    } 
    return response.json()
  })
  .catch(err => console.error(err));
}


