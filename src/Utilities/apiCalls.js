export const fetchQuestions = () => {
    return fetch('http://localhost:3001/api/questions')
    .then(response => {
      if (!response.ok) {
        throw Error()
      }
      return response.json()
    })
}