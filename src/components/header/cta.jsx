import React from 'react'
import CV from '../../assets/WORK EXPERIENCE.pdf'

const cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Dowload CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default cta