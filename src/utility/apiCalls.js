import axios from "axios";



const url = 'https://onlydevs-api.herokuapp.com';

const generateURL = (request) => {
  const { endpoint, id } = request
  switch (endpoint) {
    case 'questions':
      return `${url}/questions`;
    case 'question':
      return `${url}/questions/${id}`;
    case 'vote':
      return `${url}/answers/${id}`
    default: break;
  }
};

const requestUrl = (pathname, itemId) => {
  const request = {
    endpoint: pathname,
    id: itemId
  }
  return generateURL(request)
};

const sendRequest = async (config) => {
  return await axios(config)
    .then(response => { console.log(response); return response.data })
    .catch(error => console.error('Server Error: ' + error))
};

export const getQuestions = async () => {
  const config = {
    method: 'get',
    url: requestUrl('questions')
  }
  return await sendRequest(config)
};

export const getAnswers = async (id) => {
  const config = {
    method: 'get',
    url: requestUrl('question', id)
  }
  console.log(config)
  return await sendRequest(config);
};

export const postAnswer = async ({ newAnswer: answer }) => {
  const config = {
    method: 'post',
    url: requestUrl('answer'),
    header: { 'Content-Type': 'application/json' },
    data: { question_id: answer.question_id, answer: answer.answer }
  }
  return await sendRequest(config);
};

export const postAnswerRating = async (data) => {
  const config = {
    method: 'post',
    url: requestUrl('vote', data.answer_id),
    data: { question_id: data.question_id, answer_id: data.answer_id, vote: data.vote }
  }
  return await sendRequest(config);
}

