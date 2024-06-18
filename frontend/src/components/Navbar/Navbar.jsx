import React, { useContext, useState } from 'react'
import './Navbar.css'

import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("Home");
    const {getTotalCartAmount}=useContext(StoreContext)
    const { isLoggedIn } = useContext(StoreContext);
  return (
    <div className='Navbar'>
    <Link to="/"><img src={assets.logo} alt="" className='logo'></img></Link>
    <ul className='navbar-menu'>
        <Link to="/" onClick={()=>setMenu("Home")}  className={menu==="Home"?"active":""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("Menu")}  className={menu==="Menu"?"active":""}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("Mobile-app")}  className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href="#footer" onClick={()=>setMenu("Contact Us")}  className={menu==="Contact Us"?"active":""}>Contact Us</a>
    </ul>
    <div className='navbar-right'>
        <img src={assets.search_icon} alt=""></img>
        <div className='navbar-search-icon'>
            <Link to="/cart"><img src={assets.basket_icon} alt=""></img></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>

        </div>
        
        {/* <button onClick={()=>setShowLogin(true)}>Sign in</button> */}
        {isLoggedIn ? (
                    <img src={assets.profile_icon} alt="User Profile" className='profile-image' />
                ) : (
                    <button onClick={() => setShowLogin(true)}>Sign in</button>
                )}
    </div>
    </div>
  )
}

export default Navbar