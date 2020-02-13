import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-a08d8.firebaseio.com/'
})