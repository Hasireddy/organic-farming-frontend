import React from 'react';
import logo from "../assets/logo.png";
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = ({ isAuthenticated, logOut }) => {
  return (
    <div id='navBarContainer'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" width="70" height="70" className="d-inline-block align-text-center" />
        </a>
        <a className='navbar-brand' href='/'>
          ORGANIC FARMING COMMUNITY
        </a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='/#navbarNav'
          aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'>

          </span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mb-2 mb-lg-0 ml-auto'>
            {
              localStorage.getItem('logintoken') ? (
                <>
                  <li className='nav-item'>
                    <NavLink to="/" className='nav-link'>Home</NavLink> {/* Farmers home page, displays of his own products, where he can edit delete, add product should redirect to Details page, where user can add new products of his own*/}
                  </li>
                  <li className='nav-item'>
                    <NavLink to="/Products" className='nav-link'>All Products</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Details" className='nav-link'>Details</NavLink>
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
