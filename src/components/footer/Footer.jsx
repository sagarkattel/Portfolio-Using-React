import React from 'react'
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'



const Footer = () => {
  return (
    <footer>
      <a href="/#" onClick={() => {
        window.location.assign('#')}} className='footer__logo'>Sagar</a>
      <ul className='permalinks'>
        <li><button href="#" onClick={() => {
          window.location.assign('#');
        }}>Home</button></li>
        <li><button href="#about" onClick={() => {
          window.location.assign('#about');
        }}>About</button></li>

        <li><button href="#experience" onClick={() => {
          window.location.assign('#experience');
        }}>Experience</button></li>


        <li><button href="#services" onClick={() => {
          window.location.assign('#services');
        }}>Works</button></li>

        <li><button href="#testimonials" onClick={() => {
          window.location.assign('#testimonials');
        }}>Testimonials</button></li>

        <li><button href="#contact" onClick={() => {
          window.location.assign('#contact');
        }}>Contact</button></li>


      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; SAGAR Academy. All rights reserved. </small>
      </div>

    </footer>

  )
}

export default Footer