import createApiInstance from "../utils/apis/createApiInstance";

export const sampleAPi = async data => {

     console.log("data", data);
try{
     const response = await createApiInstance({
         additionalHeaders: {}
     }).post("http://ec2-54-90-255-7.compute-1.amazonaws.com:8080/alumni/login");
     return response;
    } catch (error){ 
        return error.response;
    }
     
   
}