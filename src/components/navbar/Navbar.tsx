import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './navbar.css';
const Navbar = () => {
  return (
    <div className="nav container">
      <div className="artistname">
        <h1>RAYMOND</h1>
       
      </div>
      <div className="nav__item">
        <div className="categories">
        <li className='tattoos'>
          <a href="#tattoos">
            Tattoos
          </a>
        </li>
        <li className='about'>
          <a href="#about">
            About
          </a>
        </li>
        <li className='contact'>
          <a href="#contact">
            Contact
          </a>
        </li>
        </div>
      </div>
      <SocialIcon className="igIcon" url="https://www.instagram.com/rayd_ink/" bgColor="none" fgColor="black"/>
    </div>
  )
}

export default Navbar