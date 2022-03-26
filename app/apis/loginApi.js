import createApiInstance from "../utils/apis/createApiInstance";
import { BASE_URL } from "../config/local";

export const loginApi = async data => {

     console.log("data", data);
try{
     const response = await createApiInstance({
         additionalHeaders: {}
     }).post(BASE_URL+'/login',data);
     console.log("Response Data", response);
     return response;
    } catch (error){ 
        return error.response;
    }
     
   
}