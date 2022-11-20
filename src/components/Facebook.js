import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { loginWithFacebook } from '../services/AuthService'


function Facebook() {

const responseFacebook =async(response)=>{
    try {
        // console.log(response.accessToken)
        // console.log(response.userID)
         //sending idToken to loginWithFacebook finction inside authService 
         const result = await loginWithFacebook({
          userID: response.userID, 
          accessToken:response.accessToken})
         console.log("facebook login sucess" , result)
        //navigate to profile


        
    } catch (error) {
        
    }


} 

    
  return (
    <div>  
        <FacebookLogin
  appId="1130606634267528"
  autoLoad
  callback={responseFacebook}
  render={renderProps => (
    <button onClick={renderProps.onClick}>FaceBook Login</button>
  )}
/>
    </div>
  )
}

export default Facebook