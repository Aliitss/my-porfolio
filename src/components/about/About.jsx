import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import {BiBriefcaseAlt} from 'react-icons/bi'
import {GiConversation} from 'react-icons/gi'
import {GiTechnoHeart} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About img"/>
          </div>          
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiBriefcaseAlt className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about__card">
              <GiConversation className='about__icon'/>
              <h5>Languages</h5>
              <small>English
              Spanish</small>
            </article>

            <article className="about__card">
              <GiTechnoHeart className='about__icon'/>
              <h5>Technologies</h5>
              <small>JavaScript
              React
              Redux
              HTML
              CSS
              SQL
              Sequalize
              Node.js
              </small>
            </article>
          </div>
          <p>
          Jr. Fullstack developer with a preference towards the frontend.
          Passionate about architectural and graphic design.
          I am looking for a position where I can combine and develop my skills as a developer and designer in the IT field.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>                
      </div> 
    
    </section>
  )
}

export default About