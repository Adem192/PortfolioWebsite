import React from 'react'
import './portfolio.css'
import Nostalgic from '../../assets/nostalgic.png'
import Passwords from '../../assets/passwords.png'
import Flappy from '../../assets/flappy.png'

const PortfolioGallery = () => {
  return (
    <div className='gallery__container'>
      <div className="gallery__row">
        <a href="https://www.nostalgicmomentsphotography.co.uk/" target="_blank" rel="noreferrer">
          <img src={Nostalgic} alt="Nostalgic Moments Photography" loading="lazy"/>
          <label>Nostalgic<br/>Moments<br/>Photography</label>
        </a>
        <a href="https://ademkanca.co.uk/passwords" target="_blank" rel="noreferrer">
          <img src={Passwords} alt="Adem Kanca Password Generator" loading="lazy"/>
          <label>Password<br/>Generator</label>
        </a>
        <a href="https://ademkanca.co.uk/flappy" target="_blank" rel="noreferrer">
          <img src={Flappy} alt="Adem Kanca Flappy Bird Game" loading="lazy"/>
          <label>Flappy<br/>Bird<br/>Game</label>
        </a>
      </div>
    </div>
  )
}

export default PortfolioGallery