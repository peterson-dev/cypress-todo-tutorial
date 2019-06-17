import axios from 'axios'

export const saveTodo = (todo) =>
  axios.post('http://localhost3030/api/todos', todo)