import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Aliitss</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Aliitss"> <FaGithub/> </a>
        <a href="https://www.linkedin.com/in/alessandra-bolivar-598944242/"> <BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aliitss Dev. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer