import axios from "axios";

const url = 'https://onlydevs-api.herokuapp.com';

const generateURL = (request) => {
  const { endpoint, id } = request
  switch (endpoint) {
    case 'questions':
      return `${url}/questions`
    case 'answers':
      return `${url}/questions/${id}`
    case 'vote':
      return `${url}/answers/${id}`
    default:
      break;
  }
};

const requestUrl = (pathname, itemId) => {
  const request = {
    endpoint: pathname,
    id: itemId
  }
  return generateURL(request)
}


const sendRequest = async (config) => {
  return await axios(config)
    .then(response => response.data)
    .catch(error => console.error('Server Error: ' + error))
}

export const getQuestions = async () => {
  const config = {
    method: 'get',
    url: requestUrl('questions')
  }
  return await sendRequest(config)
}

export const getAnswers = async (id) => {
  const config = {
    method: 'get',
    url: requestUrl('answers', id)
  }
  return await sendRequest(config);
}

export const postAnswer = async (data) => {
  const config = {
    method: 'post',
    url: requestUrl('answers', data.questionId),
    body: JSON.stringify(data)
  }
  return await sendRequest(config);
}

export const postAnswerRating = async (data) => {
  const config = {
    method: 'post',
    url: requestUrl('vote', data.answerId),
    body: JSON.stringify(data)
  }
  return await sendRequest(config);
}

