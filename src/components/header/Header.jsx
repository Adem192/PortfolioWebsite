import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/headshot2.jpeg'
import LOGO from '../../assets/AK.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <div className="logo">
          <p className='logo-text'>AK</p>
        </div> */}
        
        <p classname="text-intro">Hello! I'm</p>
        <h1>Adem Kanca</h1>
        <h2 className="text-light">Fullstack Web Developer</h2>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <CTA />      
      </div>
    </header>
  )
}

export default Header