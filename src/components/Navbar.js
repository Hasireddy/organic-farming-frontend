import React from 'react';
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id='navBarContainer'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className="navbar-brand" href="#/">
          <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-center" />
        </a>
        <a className='navbar-brand' href='/#'>
          ORGANIC FARMING COMMUNITY
        </a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='/#navbarNav'
          aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'>

          </span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mb-2 mb-lg-0 ml-auto'>
            <li className='nav-item'>
              {/* <a className='nav-link' href='/#'>Home</a> */}
              <NavLink to="/" className='nav-link'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/products" className='nav-link'>Products</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/login" className='nav-link'>Login</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/About" className='nav-link'>About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Register" className='nav-link'>Register</NavLink>
              <li className="nav-item">
                <NavLink to="/details" className='nav-link'>Details</NavLink>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
