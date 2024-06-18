import React, { useContext, useState } from 'react'
import './LoginPopup.css'

import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Sign Up")
    const { setIsLoggedIn } = useContext(StoreContext);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Your logic for login or signup
        // On successful login/signup:
        setIsLoggedIn(true);
        //setUserProfileImage('path/to/new/profile/image.jpg'); // Update as needed
        setShowLogin(false);
    };
  return (
    <div className='login-popup'>
        <form className='login-popup-container' onSubmit={handleFormSubmit}>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""></img>
            </div>
            <div className='login-popup-inputs'>
                {currState==="Login"?<></>:<input type="text" placeholder='Username'/>}

                
                <input type="email" placeholder='Your email' required></input>
                <input type="password" placeholder='Password' required></input>

            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required></input>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>

            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
        </form>

    </div>
  )
}

export default LoginPopup