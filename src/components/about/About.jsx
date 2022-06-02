import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolder2} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="me" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about__icons' />
            <h5>Experience</h5>
            <small>3+ Years working</small>
          </article>
          <article className='about__card'>
          <FiUsers className='about__icons' />
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
          </article>
          <article className='about__card'>
          <BsFolder2 className='about__icons' />
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis distinctio facere deserunt mollitia reiciendis, non rerum voluptas reprehenderit perspiciatis beatae fugit debitis. Delectus fugit labore qui accusamus laboriosam hic reprehenderit.
        </p>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About