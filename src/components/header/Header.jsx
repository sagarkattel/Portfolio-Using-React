import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/My.png'
import Headersocials from './Headersocials'
import Scroll from './Scroll'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Sagar Kattel</h1>
          <h5 className="text-light">FullStack Developer</h5>
          <CTA />
          <Headersocials />
          <div className="me">
              <img src={ME} alt="Me" />
          </div>
      </div>
      <Scroll />
      
    </header>
  )
}

export default Header