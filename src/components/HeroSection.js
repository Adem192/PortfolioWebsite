import React from 'react';
import '../App.css';
import '../css/HeroSection.css';

function HeroSection(){
  return(
    <body>
      <div className='hero-container'>
        <video src="/CircuitBoards.mp4" autoPlay loop muted />
        <h1> ADEM KANCA </h1>
        <p> Computer Science Graduate</p>
      </div>
    </body>
  )
}

export default HeroSection
