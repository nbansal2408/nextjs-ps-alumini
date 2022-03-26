import axios from 'axios';
import { v4 as uuidV4 } from 'uuid'

 const getHeaders = additonalHeaders => ({
    'Content-type': 'application/json',
    'X-Client-version': '1.0',
    'X-Client-ID': 'sapient-alumini',
    'X-Request-ID': uuidV4(),
    'Cache-Control': 'no-cache',
    Accept: 'application/vnd.api+json',
    ...additonalHeaders
 });

 const createApiInstance = ({baseURL, timeout, additonalHeaders} ={}) =>{
     const headers = getHeaders(additonalHeaders);
     return axios.create({
         baseURL,
         timeout,
         headers,
     })
 }

 export default createApiInstance;