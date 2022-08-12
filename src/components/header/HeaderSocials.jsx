import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

import './HeaderSocials.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/alessandra-bolivar-598944242/" target="_blanck"><BsLinkedin className='header__icons'/></a>
        <a href="https://github.com/Aliitss" target="_blank" rel='noreferrer'><FaGithub className='header__icons'/></a>
    </div>
  )
}

export default HeaderSocials