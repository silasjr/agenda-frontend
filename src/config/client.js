import axios from 'axios'
export default () => {
  let baseURL = process.env.NODE_ENV === 'production' ? 'https://localhost:3000/v1' : 'http://localhost:3000/v1'
  return axios.create({
    baseURL
  })
}
