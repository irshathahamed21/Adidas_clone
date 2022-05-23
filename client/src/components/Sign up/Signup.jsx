import React from 'react'

import Popup from 'reactjs-popup';
import "./signup.css"



function Signup() {
  return (
    <div>
    <Popup  className = "popup" trigger={<button> signup </button>} 
    >
         <div className = "signup__form">

<h1>CREATE YOUR ACCOUNT</h1>
<h4>Sign up now and get 15% off your first order.</h4>

<form>
  <input type="email" placeholder = "Email *"  />
  <input type="password" placeholder = "Password *"  />


</form>

</div>
     
    </Popup>
  </div>
  )
}

export default Signup