import axios from 'axios';
import * as dotenv from "dotenv";


dotenv.config();

const api = axios.create({
    baseURL: process.env.API_URL
});

export async function fetchPosts () {
    try {
      const response = await api.get('/posts');
      console.log("response.data");
      console.log(response.data);
    } catch (err) {
  
        console.log("`Error: ${err.message}`");
    }
}