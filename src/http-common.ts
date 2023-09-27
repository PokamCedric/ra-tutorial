import axios from 'axios';
import * as dotenv from "dotenv";


dotenv.config();

export default axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-type": "application/json"
      }
});


// export async function fetchAll (resource: String) {
//     try {
//         const response = await api.get(`/${resource}`);
//         return response.data;
//     } catch (err) {
  
//         console.log("`Error: ${err.message}`");
//     }
// }
// export async function findOne (resource: String, params: any) {
//     try {
//         const response = await api.get(`/${resource}/${params.id}`);
//         return response.data;
//     } catch (err) {
  
//         console.log("`Error: ${err.message}`");
//     }
// }

// export async function insertOne(resource: String, params: any) {
//     // POST request using axios with error handling
//     await api.post(`/${resource}`, params.data)
//         .catch(error => {
//             console.error('There was an error!', error);
//         });
// }