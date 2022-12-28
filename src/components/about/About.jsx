import React from 'react';
import './About.css';
import ME from '../../assets/me.jpg'
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
            <small>1+ Years working</small>
          </article>
          <article className='about__card'>
          <FiUsers className='about__icons' />
            <h5>Clients</h5>
            <small>10+ Worldwide</small>
          </article>
          <article className='about__card'>
          <BsFolder2 className='about__icons' />
            <h5>Projects</h5>
            <small>12+ Completed</small>
          </article>
        </div>
        <p>
        Hey, I am Sagar Kattel, a passionate software developer from Nepal, with wide variety of skill in design, frontend and backend development. I love building crazy stuffs and you can always find me learning new things. I believe in minimalism and team work.
        <br />
Education -<br />
BTech Computer Science and Engineering.<br />
Chandigarh University. CGPA 8.08.<br />
        </p>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About