import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div><nav className="navbar navbar-expand-sm navbar-light bg-white  shadow-sm">
    <div className="container-fluid">
      <p className="brand-logo"> BABI Rental</p>
        <ul className="navbar-nav mx-end ">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link  " aria-current="page" to="/Product">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/Contact">Contact Us</NavLink>
          </li>
          <li  className="nav-item"><NavLink to='/Cart' className="nav-link ">Cart</NavLink></li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle justify-content-end" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            
            <li><hr class="dropdown-divider"/></li>
            <li><NavLink to='/register' className="nav-link ">< PersonAddIcon className='me-1'/> Register</NavLink></li>
            <li><hr class="dropdown-divider"/></li>
            <li><NavLink to='/SignIn' className="nav-link "><LoginIcon className='me-1'/> Login</NavLink></li>
          </ul>
        </li>
        </ul>
      </div>
   
  </nav></div>
  )
}

export default Header