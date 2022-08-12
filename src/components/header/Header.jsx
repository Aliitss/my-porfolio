import React from 'react'
import './Header.css'
import CTA from './cta'
/* import me from '../../assets/me.jpg' */
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Alessandra Bolivar </h1>
        <h5 className="text-light">Full stack developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <h1>Hello World ;)! </h1>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header