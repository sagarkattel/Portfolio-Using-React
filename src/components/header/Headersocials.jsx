import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sagar-kattel-aa7915230/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/sagarkattel/" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://sagarkattel.com.np/" target="_blank" rel="noreferrer"><BsDribbble /></a>

    </div>
  )
}

export default Headersocials