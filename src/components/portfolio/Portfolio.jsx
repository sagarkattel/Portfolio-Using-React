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
    image:IMG6,
    title:'Developer Blog Website',
    github:'https://github.com/sagarkattel/',
    demo:'https://react-blog-website.pages.dev/'
  },
  {
    id:3,
    image:IMG4,
    title:'Invoice or Bill Generator',
    github:'https://github.com/sagarkattel/invoice-or-bill-generator',
    demo:'https://bill-generator-flax.vercel.app/'
  },
  {
    id:4,
    image:IMG3,
    title:'Group Messaging',
    github:'https://github.com/sagarkattel/Grp-chat-backend',
    demo:'https://letuschat.netlify.app/'
  },
  
  {
    id:5,
    image:IMG5,
    title:'Job Finder',
    github:'https://github.com/sagarkattel/Job-Portal',
    demo:'https://github.com/sagarkattel/Job-Portal'
  },
  {
    id:6,
    image:IMG2,
    title:'Todo Application Using Typescript',
    github:'https://github.com/sagarkattel/hacktoberfest-typescript',
    demo:'https://hacktoberfest-typescript-todo.vercel.app/'
  },

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