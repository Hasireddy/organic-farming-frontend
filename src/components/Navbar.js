import React from 'react';
import logo from "../assets/logo.png";
import { NavLink, Link, Outlet } from 'react-router-dom';
import About from './ABOUT-PAGE/About';
import Toggle from './ABOUT-PAGE/Toggle';
import sun from '../components/ABOUT-PAGE/imges/sun-icon.png'
import moon from '../components/ABOUT-PAGE/imges/moon-icon.png'


const Navbar = ({ isAuthenticated, logOut }) => {
  return (
    <div id='navBarContainer'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        {/* <a className="navbar-brand" href="/">
          <img src={moon} alt="" width="40px" height="40px" className="d-inline-block align-text-center" />
        </a>
        <Toggle />
        <a className="navbar-brand" href="/">
          <img src={sun} alt="" width="40px" height="40px" className="d-inline-block align-text-center" />
        </a> */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" width="70px" height="70px" className="d-inline-block align-text-center" />
        </a>
        <Link className='navbar-brand' to='/'>
          ORGANIC FARMING COMMUNITY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mb-2 mb-lg-0 ml-auto'>
            {
              localStorage.getItem('logintoken') ? (
                <>
                  <li className='nav-item'>
                    <NavLink to="/" className='nav-link'>Home</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to="/About" className='nav-link'>About</NavLink>
                  </li> 
                    <li className='nav-item'>
                      <NavLink to="/Products" className='nav-link'>All Products</NavLink>
                    </li> 
                
                  <li className='nav-item'>
                    <NavLink to="/Dashboard" className='nav-link'>Dashboard</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/Details" className='nav-link'>Add Product</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to="/Login" className='nav-link' onClick={logOut} style={{ cursor: 'pointer' }}>Logout</NavLink>
                  </li>

                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <NavLink to="/" className='nav-link'>Home</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to="/About" className='nav-link'>About</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to="/Products" className='nav-link'>Products</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Register" className='nav-link'>Farmer's Register</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to="/Login" className='nav-link'>Farmer's Login</NavLink>
                  </li>

                </>
              )
            }

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
