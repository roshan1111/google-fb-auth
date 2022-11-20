import React, { useEffect } from "react";
//helps to login in frontend side with google
import GoogleLogin from "react-google-login";
//gapi-script package is needed to verify google api
import { gapi } from "gapi-script";
import { loginWithGoogle } from "../services/AuthService";
import  GoogleLogout from 'react-google-login';


function Google() {
  const responseGoogle = async(response) => {
    console.log(response.tokenId)

    try {
        //sending idToken to loginWithGoogle finction inside authService 
        const result = await loginWithGoogle({idToken: response.tokenId})
        console.log("google login sucess" , result)
      //navigate to profile
    } catch (error) {
      console.log(error);
    } 
  };

  //logout

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID:
          "1073946171041-j731dj06uabrk9jnaudsv74s76klj206.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div>
      <GoogleLogin
        clientId="1073946171041-j731dj06uabrk9jnaudsv74s76klj206.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />

{/* <GoogleLogout
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout> */}
    </div>
  );
}

export default Google;
