import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

export default axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-type': 'application/json'
  }
})
