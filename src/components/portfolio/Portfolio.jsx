import React from 'react'
import './Porfolio.css'
import IMG1 from '../../assets/Portfolio1.png'
import IMG2 from '../../assets/under-construction.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    tittle: 'Pokemon personal project',
    github: 'https://github.com/Aliitss/PI-Pokemon-main',
    demo: 'https://www.linkedin.com/posts/alessandra-bolivar-598944242_react-redux-css-activity-6961362458926047233-gHvS?utm_source=linkedin_share&utm_medium=member_desktop_webhttps://www.linkedin.com/posts/alessandra-bolivar-598944242_react-redux-css-activity-6961362458926047233-gHvS?utm_source=linkedin_share&utm_medium=member_desktop_web'
  },
 
  {
    id: 2,
    image: IMG2,
    tittle: 'Portfolio Item Tittle',
    github: 'https://github.com/Aliitss/PI-Pokemon-main',
    demo: 'https://www.linkedin.com/in/alessandra-bolivar-598944242/'
  },
 
  {
    id: 3,
    image: IMG2,
    tittle: 'Portfolio Item Tittle',
    github: 'https://github.com/Aliitss/PI-Pokemon-main',
    demo: 'https://www.linkedin.com/in/alessandra-bolivar-598944242/'
  },
 
  {
    id: 4,
    image: IMG2,
    tittle: 'Portfolio Item Tittle',
    github: 'https://github.com/Aliitss/PI-Pokemon-main',
    demo: 'https://www.linkedin.com/in/alessandra-bolivar-598944242/'
  },
 
  {
    id: 5,
    image: IMG2,
    tittle: 'Portfolio Item Tittle',
    github: 'https://github.com/Aliitss/PI-Pokemon-main',
    demo: 'https://www.linkedin.com/in/alessandra-bolivar-598944242/'
  },
 
  {
    id: 6,
    image: IMG2,
    tittle: 'Portfolio Item Tittle',
    github: 'https://github.com/Aliitss/PI-Pokemon-main',
    demo: 'https://www.linkedin.com/in/alessandra-bolivar-598944242/'
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, tittle, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={tittle} />
                </div>
                <h3>{tittle}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Demo</a>        
                </div>
            </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Portfolio

/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="pokemon" />
          </div>
          <h3>Pokemon Poject</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Aliitss" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://www.linkedin.com/posts/alessandra-bolivar-598944242_react-redux-css-activity-6961362458926047233-gHvS?utm_source=linkedin_share&utm_medium=member_desktop_webhttps://www.linkedin.com/posts/alessandra-bolivar-598944242_react-redux-css-activity-6961362458926047233-gHvS?utm_source=linkedin_share&utm_medium=member_desktop_web" className='btn btn-primary' target='_blank' rel='noreferrer'>Demo</a>        
          </div>
        </article> */