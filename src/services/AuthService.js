import axios from "axios";

//data will be response.tokenId (token that is generated while login from google)
export const loginWithGoogle = async(data) =>{
   const response = await axios.post("http://localhost:3003/api/google-login",{
    data,
   })
   return response.data
} 


//data will be response.tokenId (token that is generated while login from google)
export const loginWithFacebook = async(data) =>{
   const response = await axios.post("http://localhost:3003/api/facebook-login",{
    data,
   })
   return response.data
} 

