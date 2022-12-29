import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data=[
  {
    id:1,
    image:IMG1,
    title:'SagarSpace',
    github:'https://github.com/sagarkattel/SagarSpace',
    demo:'https://sagarspace.netlify.app/'
  },
  {
    id:2,
    image:IMG2,
    title:'Multi Step Form Using React',
    github:'https://github.com/sagarkattel/Multistep-Form',
    demo:'https://multistepformm.netlify.app/'
  },
  {
    id:3,
    image:IMG3,
    title:'Todo App using ReactJS',
    github:'https://github.com/sagarkattel/React-Todo',
    demo:'https://thingstodoforday.netlify.app/'
  },
  {
    id:4,
    image:IMG4,
    title:'Prortfolio Website With Login Functionality',
    github:'https://github.com/sagarkattel/Complete-Website-Using-HTML-CSS-AND-JS',
    demo:'https://webbuiltbysagar.netlify.app/'
  },
  {
    id:5,
    image:IMG5,
    title:'WorkSheet Centre for Chandigarh University Students',
    github:'https://github.com/sagarkattel/Worksheet',
    demo:'https://worksheett.netlify.app/'
  },
  {
    id:6,
    image:IMG6,
    title:'Crypto Currency Dashboard',
    github:'https://github.com/sagarkattel/Crypto-Currency-Dashboard',
    demo:'https://cryptodashboardfrontend.netlify.app/'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
    {
      data.map(({id,image,title,github,demo})=>{
        return(
          <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
      <a href={github} className='btn'>Github</a>
      <a href={demo} className='btn btn-primary'  rel="noopener">Live Demo</a>
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