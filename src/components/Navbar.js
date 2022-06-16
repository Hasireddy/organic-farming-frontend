import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-success'>
      < a className='navbar-brand' href=' /#' >
        ORGANIC FARMING COMMUNITY
      </a >
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='/#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='/#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/#'>
              Products
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/#'>
              Login
            </a>
          </li>
          {/* <li className="nav-item">
        <a className="nav-link disabled" href="/#">Disabled</a>
      </li> */}
        </ul>
      </div>
    </nav >
  );
};

export default Navbar;
