import React from 'react'
import Facebook from './components/Facebook'
import Google from './components/Google'

function login() {
    // console.log(process.env.REACT_APP_CLIENT_ID)
  return (
    <>    <h1>user login</h1>
    <Google/>
    <Facebook/>
    </>
  )
}

export default login