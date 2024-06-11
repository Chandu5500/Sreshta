import React from 'react'


import './header.css'

export function Header(){
  return (
    <nav className='nav-header'>
      <div className='nav-content'>
        <h1><div className='website-logo'>KingsWay</div></h1>
        <ul className='nav-menu'>
          <li>
            <div className='nav-link'>
              About
            </div>
          </li>
          <li>
            <div className='nav-link'>
              Services
            </div>
          </li>
          <li>
            <div className='nav-link'>
              Contact
            </div>
          </li>
        </ul>
        <div className='buttons'>
        <div><button type='button' className='register-button'>Register</button></div>
        <div><button type='button' className='login-button'>Login</button></div>
        </div>
        <div className='mobile-icon-div'>
        <div><h5 className='mobile-register-text'>Signup | </h5></div>
        <div>
        <button type="button" className="login-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="login-icon"
          />
        </button>
        </div>
        </div>
      </div>
      <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <div>
          <li className='nav-mobile-link'>About</li>
        </div>
        <div>
          <li className='nav-mobile-link'>Services</li>
        </div>
        <div>
          <li className='nav-mobile-link'>Contact Us</li>
        </div>
      </ul>
      </div>
    </nav>
  )
}

