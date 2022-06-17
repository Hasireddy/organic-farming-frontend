import React from 'react';
import './Footer.css';
import '../assets/Facebook.png';

function Footer() {
  return (
    <div>
      <footer>
        
        <div className='footerContainer' id='footerContainer'>
          <div className='row'>
            <div className='col-md-4 footer-column' id='footerProducts'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <span className='footer-title'>Product</span>
                </li>
                <li className='nav-item'>
                  <a className='nav-footer' href='/#'>
                    Product 1
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-footer' href='/#'>
                    Product 2
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-footer' href='/#'>
                    Plans & Prices
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-footer' href='/#'>
                    Frequently asked questions
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-4 footer-column'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <span className='footer-title'>Company</span>
                </li>
                <li className='nav-item'>
                  <a className='nav-footer' href='/#'>
                    About us
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-footer' href='/#'>
                    Job postings
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-footer' href='/#'>
                    News and articles
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-4 footer-column'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <span className='footer-title'>Contact </span>
                </li>
                <li className='nav-item'>
                  <span className='nav-footer'>
                    <i className='fas fa-phone'></i>+47 45 80 80 80
                  </span>
                </li>
                <li className='nav-item'>
                  <a className='nav-footer' href='/#'>
                    <i className='fas fa-comments'></i>Live chat
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-footer' href='/#'>
                    <i className='fas fa-envelope'></i>Contact us
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-footer' href='/#'>
                    <i className='fas fa-star'></i>Give feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='text-center'>
            <i className='fas fa-ellipsis-h'></i>
          </div>

          <div className='row text-center'>
            <div className='col-md-4 box'>
              <span className='copyright quick-footers'>
                Copyright &copy; Your Website{' '}
                <script>document.write(new Date().getFullYear())</script>
              </span>
            </div>
            <div className='col-md-4 box'>
              <ul className='list-inline social-buttons'>
                <li className='list-inline-item'>
                  <a href='/#'>
                    <i className='bi bi-twitter'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='../assets/Facebook.png'>
                    <i className='bi bi-facebook'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='/#'>
                    <i className='bi bi-footeredin'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='/#'>
                    <i className='bi bi-whatsapp'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='/#'>
                    <i className='bi bi-github'></i>
                  </a>
                </li>
              </ul>
            </div>
          
          </div>
        </div>
      </footer>
         
    </div>
  );
}

export default Footer;
