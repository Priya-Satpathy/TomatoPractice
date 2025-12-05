import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
    <Link to = '/'><img src={assets.logo} alt="" className='logo' /></Link>

      <ul className='navbar-menu'>
        <li 
          onClick={() => setMenu("home")} 
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>

        <li 
          onClick={() => setMenu("menu")} 
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>

        <li 
          onClick={() => setMenu("mobile-app")} 
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>

        <li 
          onClick={() => setMenu("contact-us")} 
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>

      <div className='navbar-right'>
        <Link to='/cart'>
          <img src={assets.search_icon} alt="" />
        </Link>


        <div className='navbar-serach-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className='dot'></div>
        </div>

        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
