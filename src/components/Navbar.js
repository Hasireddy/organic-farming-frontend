import React from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div id='navBarContainer'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="50" height="50" class="d-inline-block align-text-center" />
      </a>
        <a className='navbar-brand' href='/#'>
        ORGANIC FARMING COMMUNITY
      </a>
      <button className='navbar-toggler'type='button' data-toggle='collapse' data-target='/#navbarNav'
        aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='/#'>Home</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/#'>Products</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/#'>Login</a>          
            </li>
          <li className="nav-item">
        <a className="nav-link" href="/#">Register</a>
        </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
